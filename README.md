## aframe-controls-boilerplate

> This is not at all means required for writing an A-Frame controls component. It is intended for publishing and sharing a controls component for the community to re-use.

Boilerplate for sharing [A-Frame](https://aframe.io) controls [components](https://aframe.io/docs/core/component.html):

1. `npm install && npm run unboil` to rename and trim stuff.
2. Write your controls component.
3. Build examples (`npm run dev` to watch for changes to build example bundles).
4. `npm publish` and commit the `dist/` files.
5. `npm run ghpages` to share with people.
6. Share on [Slack](https://aframevr-slack.herokuapp.com/) and [awesome-aframe](https://github.com/aframevr/awesome-aframe)!

--trim--
## aframe-example-controls

Example controls for [A-Frame](https://aframe.io).

### Properties

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.3.0/aframe.min.js"></script>
  <script src="https://rawgit.com/ngokevin/aframe-controls-boilerplate/master/dist/aframe-example-controls.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity controls="position: hmd-controls example-controls;
                        rotation: hmd-controls example-controls"></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-example-controls
```

Then register and use.

```js
require('aframe');
require('aframe-example-controls');
```
