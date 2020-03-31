# jsfi-icon

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                                                    | Type      | Default        |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------------- |
| `ariaLabel` | `aria-label` | Specifies the label to use for accessibility. Defaults to the icon name.                                                                                                       | `string`  | `undefined`    |
| `color`     | `color`      | The color to use for the background of the item.                                                                                                                               | `string`  | `undefined`    |
| `flipRtl`   | `flip-rtl`   | Specifies whether the icon should horizontally flip when `dir` is `"rtl"`.                                                                                                     | `boolean` | `undefined`    |
| `icon`      | `icon`       | A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property. | `any`     | `undefined`    |
| `ios`       | `ios`        | Specifies which icon to use on `ios` mode.                                                                                                                                     | `string`  | `undefined`    |
| `lazy`      | `lazy`       | If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.                                                                                | `boolean` | `false`        |
| `md`        | `md`         | Specifies which icon to use on `md` mode.                                                                                                                                      | `string`  | `undefined`    |
| `mode`      | `mode`       | The mode determines which platform styles to use.                                                                                                                              | `string`  | `getIonMode()` |
| `name`      | `name`       | Specifies which icon to use from the built-in set of icons.                                                                                                                    | `string`  | `undefined`    |
| `size`      | `size`       | The size of the icon. Available options are: `"small"` and `"large"`.                                                                                                          | `string`  | `undefined`    |
| `src`       | `src`        | Specifies the exact `src` of an SVG file to use.                                                                                                                               | `string`  | `undefined`    |


## Dependencies

### Used by

 - [jsfi-button](../button)
 - [jsfi-toggle-button](../toggle-button)

### Graph
```mermaid
graph TD;
  jsfi-button --> jsfi-icon
  jsfi-toggle-button --> jsfi-icon
  style jsfi-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
