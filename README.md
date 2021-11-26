# Expo SVG Shadow

Create shadow efects with SVG components

## Features

- Create shadow efects
- support for Box and Border shadows
- SVG components

## Installation

```bash
yarn add @loveslabs/expo-svg-shadow

# or

npm install @loveslabs/expo-svg-shadow
```

## Usage

```typescript
import { View } from 'react-native';
import { BoxShadow } from '@loveslabs/expo-svg-shadow';

const shadowOpt = {
  width: 280,
  height: 170,
  color: '#999',
  border: 50,
  radius: 8,
  opacity: 0.2,
  x: 0,
  y: 1,
  style: { marginVertical: 6 },
};

const Compoment = () => {
  return (
    <BoxShadow {...shadowOpt}>
      <View
        style={{
          position: 'relative',
          width: 280,
          height: 170,
          backgroundColor: '#fff',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      ></View>
    </BoxShadow>
  );
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
