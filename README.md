# React Shade Loader

**React Shade Loader** is a lightweight and customizable skeleton loader for React applications. It allows developers to display animated placeholders while content is loading, providing a smoother user experience during data fetching.

## Features

- 🎨 **Customizable**: Easily adjust the width, height, border radius, and shape of the skeleton loaders.
- ⚡ **Lightweight**: Minimal dependency footprint with optimized performance.
- 💻 **TypeScript Support**: Comes with full TypeScript support for better development experience.
- 💡 **Accessible**: Use it to improve loading state visibility in your UI.

## Installation

You can install the package via npm or yarn:

### npm
```bash
npm install react-shade-loader
```

### yarn
```bash
yarn add react-shade-loader
```

## Usage
### Basic Example
Here’s how you can use the SkeletonLoader component in your React project:

```bash
import React from 'react';
import SkeletonLoader from 'react-shade-loader';

const App = () => (
  <div>
    <h1>Loading Content...</h1>
    <SkeletonLoader width="200px" height="20px" />
    <SkeletonLoader width="100%" height="50px" borderRadius="8px" />
  </div>
);

export default App;
```

### Circle Loader Example
If you want to render a circular skeleton loader, you can use the isCircle prop:

```bash
import React from 'react';
import SkeletonLoader from 'react-shade-loader';

const AvatarLoading = () => (
  <div>
    <SkeletonLoader width="100px" height="100px" isCircle />
  </div>
);

export default AvatarLoading;
```

### Pulse Animation Example
To enable the pulse animation, use the `pulse` prop:

```bash
import React from 'react';
import SkeletonLoader from 'react-shade-loader';

const PulseLoading = () => (
  <div>
    <SkeletonLoader width="200px" height="20px" pulse />
    <SkeletonLoader width="100%" height="50px" borderRadius="8px" pulse />
  </div>
);

export default PulseLoading;
```

### Custom Styling
You can add custom class names to the component for additional styling:

```bash
import React from 'react';
import SkeletonLoader from 'react-shade-loader';
import './CustomStyles.css';

const CustomLoader = () => (
  <div>
    <SkeletonLoader width="250px" height="20px" className="my-custom-loader" />
  </div>
);

export default CustomLoader;
```
## Props

The `SkeletonLoader` component accepts the following props:

| Prop           | Type      | Default  | Description                                                                 |
| -------------- | --------- | -------- | --------------------------------------------------------------------------- |
| `width`        | `string`  | `100%`   | Sets the width of the skeleton.                                              |
| `height`       | `string`  | `20px`   | Sets the height of the skeleton.                                             |
| `borderRadius` | `string`  | `4px`    | Controls the border-radius, making it easy to create rounded corners.        |
| `isCircle`     | `boolean` | `false`  | If true, the skeleton will be rendered as a circle (width and height should be equal). |
| `className`    | `string`  | `""`     | Additional class names for custom styling.                                   |
| `pulse`		 | `boolean` | `false`  | If true, the skeleton will animate with a pulsing effect.                                 |


## Styling and Animation
The skeleton loader uses a subtle animation to indicate loading. You can customize the animation speed or background color by overriding the CSS styles in your project.


### Default CSS

```bash
@keyframes skeleton-shade {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #c0c0c0;
  }
  100% {
    background-color: #e0e0e0;
  }
}

.skeleton-loader {
  display: inline-block;
  overflow: hidden;
}
```

### Custom Pulse Animation

```bash
.pulse-animation {
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

## Contributing
If you would like to contribute to this project, feel free to submit a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.


