// Global types for the application

export interface User {
  address: string;
  biometricHash?: string;
  lastSeen: number;
}

export enum AuthStatus {
  Loading,
  SignedIn,
  SignedOut,
  Error
}
