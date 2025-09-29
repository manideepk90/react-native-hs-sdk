# hyperswitch-sdk-react-native

Hyperswitch SDK for React Native - Accept payments in your React Native app with ease.

## Installation

```sh
npm install hyperswitch-sdk-react-native
```



## Quick Start

Here's the minimal code to get started:

```tsx
// App.tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HyperProvider, useHyper } from 'hyperswitch-sdk-react-native';

function PaymentScreen() {
  const { initPaymentSession, presentPaymentSheet } = useHyper();

  const handlePayment = async () => {
    // 1. Initialize with your payment intent client secret
    await initPaymentSession({
      paymentIntentClientSecret: 'your_client_secret'
    });

    // 2. Present payment sheet
    const result = await presentPaymentSheet({});
    console.log(result);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePayment}>
        <Text>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <HyperProvider publishableKey="your_key">
      <PaymentScreen />
    </HyperProvider>
  );
}
```


## API Reference

### HyperProvider Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `publishableKey` | `string` | Yes | Your Hyperswitch publishable key |
| `customBackendUrl` | `string` | No | Custom backend URL for API calls |
| `customLogUrl` | `string` | No | Custom URL for logging |
| `customParams` | `object` | No | Additional configuration parameters |

### useHyper Hook

The `useHyper` hook provides access to payment functionality:

#### `initPaymentSession(params: InitPaymentSessionParams)`

Initializes a payment session with the provided payment intent.

**Parameters:**
- `paymentIntentClientSecret`: The client secret from your payment intent

**Returns:** Promise resolving to `InitPaymentSessionResult`

#### `presentPaymentSheet(params: PresentPaymentSheetParams)`

Presents the payment sheet to collect payment information.

**Parameters:**
- `appearance`: Optional styling configuration
  - `theme`: `'Light'` or `'Dark'`
  - `colors`: Custom color configuration
  - `primaryButton`: Primary button styling
  - `shapes`: Shape and shadow styling

**Returns:** Promise resolving to `PresentPaymentSheetResult`

## Types

```tsx
import type {
  HyperProviderProps,
  InitPaymentSessionParams,
  InitPaymentSessionResult,
  PresentPaymentSheetParams,
  PresentPaymentSheetResult,
} from 'hyperswitch-sdk-react-native';
```


## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
# react-native-hs-sdk
