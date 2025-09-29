/* TypeScript file generated from HyperProvider.res by genType. */

/* tslint:disable */

import * as HyperProviderJS from './HyperProvider.mjs';

import type { Json_t as Js_Json_t } from '../../src/shims/Js.shim.ts';

export type props<
  children,
  publishableKey,
  customBackendUrl,
  customLogUrl,
  customParams,
> = {
  readonly children: children;
  readonly publishableKey?: publishableKey;
  readonly customBackendUrl?: customBackendUrl;
  readonly customLogUrl?: customLogUrl;
  readonly customParams?: customParams;
};

export const initHyperswitch: (
  publishableKey: string,
  customBackendUrl: undefined | string,
  customLogUrl: undefined | string,
  customParams: undefined | Js_Json_t
) => Promise<void> = HyperProviderJS.initHyperswitch as any;

export const make: React.ComponentType<{
  readonly children: React.ReactNode;
  readonly publishableKey?: string;
  readonly customBackendUrl?: string;
  readonly customLogUrl?: string;
  readonly customParams?: Js_Json_t;
}> = HyperProviderJS.make as any;
