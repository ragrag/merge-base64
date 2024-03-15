declare module 'merge-base64' {
    interface MergeOptions {
      direction?: boolean;
      color?: string | number;
      align?: 'start' | 'center' | 'end';
      offset?: number;
      isPng?: boolean;
      margin?: number | string | { top?: number; right?: number; bottom?: number; left?: number };
    }
  
    function mergeImages(images: string[], options?: MergeOptions): Promise<string>;
  
    export { mergeImages };
  }
  