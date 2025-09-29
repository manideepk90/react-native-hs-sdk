/* TypeScript file generated from NativeHyperswitchSdk.res by genType. */

/* tslint:disable */

import type { options as PaymentSheetConfiguration_options } from '../../src/types/PaymentSheetConfiguration.gen.tsx';

export type initPaymentSessionParams = {
  readonly paymentIntentClientSecret?: string;
};

export type initPaymentSessionResult = { readonly error?: string };

export type presentPaymentSheetParams = PaymentSheetConfiguration_options;

export type paymentResult = {
  readonly status: string;
  readonly message: string;
  readonly error?: string;
  readonly type?: string;
};

export type error = { readonly code?: string; readonly message?: string };

export type presentPaymentSheetResult = {
  readonly error?: error;
  readonly paymentResult?: paymentResult;
};

export type presentPaymentSheet = (
  _1: presentPaymentSheetParams
) => Promise<string>;
