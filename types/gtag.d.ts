// types/gtag.d.ts
declare global {
  interface Window {
    gtag?: (
      command: 'get' | 'event' | 'config' | 'js',
      target: string,
      paramsOrCallback?: string | ((value: string) => void) | Record<string, any>,
      callback?: ((value: string) => void) => void
    ) => void;
  }
}

export {};
