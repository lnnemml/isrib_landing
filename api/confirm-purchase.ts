// api/confirm-purchase.ts
// Vercel Serverless Function for Server-Side Purchase Tracking
// Sends events to Meta Conversions API and GA4 Measurement Protocol

import { createHash } from 'crypto';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface PurchaseData {
  // Order details
  transaction_id: string;
  value: number;
  currency: string;
  
  // User data
  email: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  
  // Tracking IDs
  client_id: string;        // GA4 client ID
  fbp: string;              // Meta _fbp cookie
  fbc?: string;             // Meta _fbc cookie (from ad click)
  
  // Product details
  product_id: string;
  product_name: string;
  quantity: number;
  
  // User agent and IP (for Meta CAPI)
  user_agent: string;
  ip_address: string;
  
  // Optional: timestamp
  timestamp?: number;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * SHA-256 hash function for PII normalization
 * Meta CAPI requires hashed user data
 */
function sha256(data: string): string {
  return createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

/**
 * Normalize email for hashing
 */
function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Normalize phone for hashing (remove all non-digits)
 */
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

// ============================================
// META CONVERSIONS API
// ============================================

/**
 * Send Purchase event to Meta Conversions API
 * Docs: https://developers.facebook.com/docs/marketing-api/conversions-api
 */
async function sendToMetaCAPI(data: PurchaseData): Promise<boolean> {
  const FB_PIXEL_ID = process.env.FB_PIXEL_ID;
  const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
  
  if (!FB_PIXEL_ID || !FB_ACCESS_TOKEN) {
    console.error('❌ Meta CAPI credentials missing');
    return false;
  }
  
  const eventTime = data.timestamp || Math.floor(Date.now() / 1000);
  
  // Build user data with hashed PII
  const userData: any = {
    client_ip_address: data.ip_address,
    client_user_agent: data.user_agent,
    fbp: data.fbp,
  };
  
  // Add fbc if available (click ID from Facebook ad)
  if (data.fbc) {
    userData.fbc = data.fbc;
  }
  
  // Hash email
  if (data.email) {
    userData.em = sha256(normalizeEmail(data.email));
  }
  
  // Hash phone (optional)
  if (data.phone) {
    userData.ph = sha256(normalizePhone(data.phone));
  }
  
  // Hash first/last name (optional)
  if (data.first_name) {
    userData.fn = sha256(data.first_name.toLowerCase().trim());
  }
  if (data.last_name) {
    userData.ln = sha256(data.last_name.toLowerCase().trim());
  }
  
  // Build event payload
  const payload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: eventTime,
        event_source_url: 'https://isrib.shop',
        action_source: 'website',
        user_data: userData,
        custom_data: {
          currency: data.currency,
          value: data.value,
          content_ids: [data.product_id],
          content_name: data.product_name,
          content_type: 'product',
          num_items: data.quantity,
        },
        event_id: data.transaction_id, // Deduplication ID
      },
    ],
  };
  
  console.log('📤 Sending to Meta CAPI:', {
    pixel_id: FB_PIXEL_ID,
    event: 'Purchase',
    value: data.value,
    transaction_id: data.transaction_id,
  });
  
  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error('❌ Meta CAPI error:', result);
      return false;
    }
    
    console.log('✅ Meta CAPI success:', result);
    return true;
  } catch (error) {
    console.error('❌ Meta CAPI request failed:', error);
    return false;
  }
}

// ============================================
// GA4 MEASUREMENT PROTOCOL
// ============================================

/**
 * Send Purchase event to GA4 Measurement Protocol
 * Docs: https://developers.google.com/analytics/devguides/collection/protocol/ga4
 */
async function sendToGA4(data: PurchaseData): Promise<boolean> {
  const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
  const GA_API_SECRET = process.env.GA_API_SECRET;
  
  if (!GA_MEASUREMENT_ID || !GA_API_SECRET) {
    console.error('❌ GA4 credentials missing');
    return false;
  }
  
  const timestamp = data.timestamp || Date.now();
  
  // Build event payload
  const payload = {
    client_id: data.client_id,
    timestamp_micros: timestamp * 1000, // Convert to microseconds
    user_properties: {
      email: {
        value: data.email,
      },
    },
    events: [
      {
        name: 'purchase',
        params: {
          transaction_id: data.transaction_id,
          value: data.value,
          currency: data.currency,
          items: [
            {
              item_id: data.product_id,
              item_name: data.product_name,
              quantity: data.quantity,
              price: data.value / data.quantity,
            },
          ],
        },
      },
    ],
  };
  
  console.log('📤 Sending to GA4 Measurement Protocol:', {
    measurement_id: GA_MEASUREMENT_ID,
    client_id: data.client_id,
    event: 'purchase',
    value: data.value,
    transaction_id: data.transaction_id,
  });
  
  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ GA4 Measurement Protocol error:', errorText);
      return false;
    }
    
    console.log('✅ GA4 Measurement Protocol success');
    return true;
  } catch (error) {
    console.error('❌ GA4 Measurement Protocol request failed:', error);
    return false;
  }
}

// ============================================
// MAIN HANDLER
// ============================================

/**
 * Vercel Serverless Function Handler
 */
export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Parse request body
    const purchaseData: PurchaseData = req.body;
    
    // Validate required fields
    const requiredFields = [
      'transaction_id',
      'value',
      'currency',
      'email',
      'client_id',
      'fbp',
      'product_id',
      'product_name',
      'quantity',
    ];
    
    for (const field of requiredFields) {
      if (!purchaseData[field as keyof PurchaseData]) {
        return res.status(400).json({ 
          error: `Missing required field: ${field}` 
        });
      }
    }
    
    // Get user agent and IP from request
    purchaseData.user_agent = req.headers['user-agent'] || '';
    purchaseData.ip_address = 
      req.headers['x-forwarded-for']?.split(',')[0] || 
      req.headers['x-real-ip'] || 
      req.socket.remoteAddress || 
      '';
    
    console.log('📦 Processing purchase:', {
      transaction_id: purchaseData.transaction_id,
      email: purchaseData.email,
      value: purchaseData.value,
      client_id: purchaseData.client_id,
      fbp: purchaseData.fbp,
    });
    
    // Send to both platforms in parallel
    const [metaSuccess, ga4Success] = await Promise.all([
      sendToMetaCAPI(purchaseData),
      sendToGA4(purchaseData),
    ]);
    
    // Return results
    return res.status(200).json({
      success: true,
      results: {
        meta_capi: metaSuccess,
        ga4_measurement_protocol: ga4Success,
      },
      transaction_id: purchaseData.transaction_id,
    });
  } catch (error: any) {
    console.error('❌ Error processing purchase:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
    });
  }
}
