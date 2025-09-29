/* TypeScript file generated from useHyper.res by genType. */

/* tslint:disable */

import * as useHyperJS from './useHyper.mjs';

import type { initPaymentSessionParams as NativeHyperswitchSdk_initPaymentSessionParams } from '../../src/modules/NativeHyperswitchSdk.gen.tsx';

import type { initPaymentSessionResult as NativeHyperswitchSdk_initPaymentSessionResult } from '../../src/modules/NativeHyperswitchSdk.gen.tsx';

import type { presentPaymentSheetParams as NativeHyperswitchSdk_presentPaymentSheetParams } from '../../src/modules/NativeHyperswitchSdk.gen.tsx';

import type { presentPaymentSheetResult as NativeHyperswitchSdk_presentPaymentSheetResult } from '../../src/modules/NativeHyperswitchSdk.gen.tsx';

export type useHyper = {
  readonly initPaymentSession: (
    _1: NativeHyperswitchSdk_initPaymentSessionParams
  ) => Promise<NativeHyperswitchSdk_initPaymentSessionResult>;
  readonly presentPaymentSheet: (
    _1: NativeHyperswitchSdk_presentPaymentSheetParams
  ) => Promise<NativeHyperswitchSdk_presentPaymentSheetResult>;
};

export const useHyper: () => useHyper = useHyperJS.useHyper as any;
