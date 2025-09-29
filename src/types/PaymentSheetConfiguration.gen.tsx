/* TypeScript file generated from PaymentSheetConfiguration.res by genType. */

/* tslint:disable */

export type localeTypes =
  | 'En'
  | 'He'
  | 'Fr'
  | 'En_GB'
  | 'Ar'
  | 'Ja'
  | 'De'
  | 'Fr_BE'
  | 'Es'
  | 'Ca'
  | 'Pt'
  | 'It'
  | 'Pl'
  | 'Nl'
  | 'NI_BE'
  | 'Sv'
  | 'Ru'
  | 'Lt'
  | 'Cs'
  | 'Sk'
  | 'Ls'
  | 'Cy'
  | 'El'
  | 'Et'
  | 'Fi'
  | 'Nb'
  | 'Bs'
  | 'Da'
  | 'Ms'
  | 'Tr_CY';

export type fontFamilyTypes =
  | 'DefaultIOS'
  | 'DefaultAndroid'
  | 'DefaultWeb'
  | { TAG: 'CustomFont'; _0: string };

export type placeholder = {
  readonly cardNumber?: string;
  readonly expiryDate?: string;
  readonly cvv?: string;
};

export type address = {
  readonly first_name?: string;
  readonly last_name?: string;
  readonly city?: string;
  readonly country?: string;
  readonly line1?: string;
  readonly line2?: string;
  readonly zip?: string;
  readonly state?: string;
};

export type phone = {
  readonly number?: string;
  readonly country_code?: string;
};

export type addressDetails = {
  readonly address?: address;
  readonly email?: string;
  readonly phone?: phone;
};

export type customerConfiguration = {
  readonly id?: string;
  readonly ephemeralKeySecret?: string;
};

export type colors = {
  readonly primary?: string;
  readonly background?: string;
  readonly componentBackground?: string;
  readonly componentBorder?: string;
  readonly componentDivider?: string;
  readonly componentText?: string;
  readonly primaryText?: string;
  readonly secondaryText?: string;
  readonly placeholderText?: string;
  readonly icon?: string;
  readonly error?: string;
  readonly loaderBackground?: string;
  readonly loaderForeground?: string;
};

export type colorType = {
  readonly light?: colors;
  readonly dark?: colors;
  readonly primary?: string;
  readonly background?: string;
  readonly componentBackground?: string;
  readonly componentBorder?: string;
  readonly componentDivider?: string;
  readonly componentText?: string;
  readonly primaryText?: string;
  readonly secondaryText?: string;
  readonly placeholderText?: string;
  readonly icon?: string;
  readonly error?: string;
  readonly loaderBackground?: string;
  readonly loaderForeground?: string;
};

export type offsetType = { readonly x?: number; readonly y?: number };

export type shadowConfig = {
  readonly color?: string;
  readonly opacity?: number;
  readonly blurRadius?: number;
  readonly offset?: offsetType;
  readonly intensity?: number;
};

export type shapes = {
  readonly borderRadius?: number;
  readonly borderWidth?: number;
  readonly shadow?: shadowConfig;
};

export type font = {
  readonly family?: fontFamilyTypes;
  readonly scale?: number;
  readonly headingTextSizeAdjust?: number;
  readonly subHeadingTextSizeAdjust?: number;
  readonly placeholderTextSizeAdjust?: number;
  readonly buttonTextSizeAdjust?: number;
  readonly errorTextSizeAdjust?: number;
  readonly linkTextSizeAdjust?: number;
  readonly modalTextSizeAdjust?: number;
  readonly cardTextSizeAdjust?: number;
};

export type primaryButtonColor = {
  readonly background?: string;
  readonly text?: string;
  readonly border?: string;
};

export type primaryButtonColorType =
  | { TAG: 'PrimaryButtonColor'; _0: undefined | primaryButtonColor }
  | {
      TAG: 'PrimaryButtonDefault';
      readonly light: undefined | primaryButtonColor;
      readonly dark: undefined | primaryButtonColor;
    };

export type primaryButton = {
  readonly shapes?: shapes;
  readonly primaryButtonColor?: primaryButtonColorType;
};

export type googlePayButtonType =
  | 'BUY'
  | 'BOOK'
  | 'CHECKOUT'
  | 'DONATE'
  | 'ORDER'
  | 'PAY'
  | 'SUBSCRIBE'
  | 'PLAIN';

export type googlePayButtonStyle = 'light' | 'dark';

export type googlePayThemeBaseStyle = {
  readonly light?: googlePayButtonStyle;
  readonly dark?: googlePayButtonStyle;
};

export type googlePayConfiguration = {
  readonly buttonType?: googlePayButtonType;
  readonly buttonStyle?: googlePayThemeBaseStyle;
};

export type applePayButtonType =
  | 'buy'
  | 'setUp'
  | 'inStore'
  | 'donate'
  | 'checkout'
  | 'book'
  | 'subscribe'
  | 'plain';

export type applePayButtonStyle = 'white' | 'whiteOutline' | 'black';

export type applePayThemeBaseStyle = {
  readonly light?: applePayButtonStyle;
  readonly dark?: applePayButtonStyle;
};

export type applePayConfiguration = {
  readonly buttonType?: applePayButtonType;
  readonly buttonStyle?: applePayThemeBaseStyle;
};

export type themeType =
  | 'Default'
  | 'Light'
  | 'Dark'
  | 'Minimal'
  | 'FlatMinimal';

export type appearance = {
  readonly locale?: localeTypes;
  readonly colors?: colorType;
  readonly shapes?: shapes;
  readonly font?: font;
  readonly primaryButton?: primaryButton;
  readonly googlePay?: googlePayConfiguration;
  readonly applePay?: applePayConfiguration;
  readonly theme?: themeType;
};

export type options = {
  readonly allowsDelayedPaymentMethods?: boolean;
  readonly appearance?: appearance;
  readonly shippingDetails?: addressDetails;
  readonly primaryButtonLabel?: string;
  readonly paymentSheetHeaderText?: string;
  readonly savedPaymentScreenHeaderText?: string;
  readonly merchantDisplayName?: string;
  readonly defaultBillingDetails?: addressDetails;
  readonly primaryButtonColor?: string;
  readonly allowsPaymentMethodsRequiringShippingAddress?: boolean;
  readonly displaySavedPaymentMethodsCheckbox?: boolean;
  readonly displaySavedPaymentMethods?: boolean;
  readonly placeholder?: placeholder;
  readonly defaultView?: boolean;
  readonly netceteraSDKApiKey?: string;
  readonly displayDefaultSavedPaymentIcon?: boolean;
  readonly enablePartialLoading?: boolean;
  readonly customer?: customerConfiguration;
  readonly paymentSheetHeaderLabel?: string;
  readonly savedPaymentSheetHeaderLabel?: string;
};
