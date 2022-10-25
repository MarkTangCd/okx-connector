interface OKXWallet {
  send: unknown
  enable: () => Promise<string[]>
  on?: (method: string, listener: (...args: any[]) => void) => void
  removeListener?: (method: string, listener: (...args: any[]) => void) => void
}

declare interface Window {
  okxwallet?: OKXWallet;
  isOkxWallet?: boolean;
}

declare const __DEV__: boolean
