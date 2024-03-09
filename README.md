# merge-base64

> Merge multiple base64 images into a single image, for merging Buffer, Local or Jimp images please check (https://github.com/preco21/merge-img)

`merge-base64` merges given base64 images into a single image in right order.This module Utilizes Jimp and is also based on (https://github.com/preco21/merge-img).

![figure](https://rawgit.com/preco21/merge-img/master/media/figure.png)

## Install

```bash
$ npm install merge-base64
```

## Usage

```javascript
const mergeImages = require('merge-base64');
const base64Image = `iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAIAAABbzbuTAAAAAXNSR0IArs4c6QAAAARnQU1B
  AACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZSURBVDhPY/hPIhjVQAwY1UAMGPoa/v8HALkfLP4gBjPYAAAAAElFTkSuQmCC`;
const mergedImage = await mergeImages([base64Image, base64Image]);
```

## API

### mergeImages(images[, options])

- `images` Array of (Base64 Images) - List of images to concat.
- `options` Object (optional)
  - `direction` Boolean - Direction of the merged image. If this value is `true`, the images will be merged vertically (column). Otherwise, the images will be merged horizontally (row). Default is `false`.
  - `color` Number | String (hex) - Default background color represented by RGBA hex value. Default is `0x00000000`.
  - `align` String - Aligning of given images. If the images are not all the same size, images will be sorted to largest image. Possible values are `start`, `center` and `end`. Default is `start`.
  - `offset` Number - Offset in pixels between each image. Default is `0`.
  - `margin` (Number | String | Object) - Margin of the result image. If `Number` or `String` is passed, it will be considered as [standard css shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) (e.g. '40 40 0 10'). An `Object` entry can have following options:
    - `top` Number (optional) - Margin on top side of result image. Default is `0`.
    - `right` Number (optional) - Margin on right side of result image. Default is `0`.
    - `bottom` Number (optional) - Margin on bottom side of result image. Default is `0`.
    - `left` Number (optional) - Margin on left side of result image. Default is `0`.

Returns a `Promise` that resolves to the merged Base64 Image.
