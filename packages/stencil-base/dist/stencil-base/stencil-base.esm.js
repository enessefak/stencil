import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-183848b9.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["jsfi-layout",[[4,"jsfi-layout",{"open":[32]},[[0,"menuToggle","toggleAsideHandler"]]]]],["jsfi-button",[[1,"jsfi-button",{"color":[1],"size":[1],"outline":[4],"radius":[4],"icon":[1]}]]],["jsfi-call-to-action",[[1,"jsfi-call-to-action"]]],["jsfi-card",[[1,"jsfi-card",null,[[2,"click","menuToggleHandler"]]]]],["jsfi-form-element",[[1,"jsfi-form-element",{"label":[1]}]]],["jsfi-grid",[[1,"jsfi-grid",{"rows":[1],"justifyContent":[1,"justify-content"],"gap":[1],"columns":[1]}]]],["jsfi-input",[[1,"jsfi-input",{"placeholder":[1],"type":[1]}]]],["jsfi-label",[[1,"jsfi-label"]]],["jsfi-icon",[[1,"jsfi-icon",{"mode":[1025],"color":[1],"ariaLabel":[1537,"aria-label"],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[1],"src":[1],"icon":[8],"size":[1],"lazy":[4],"svgContent":[32],"isVisible":[32]}]]],["jsfi-toggle-button",[[1,"jsfi-toggle-button"]]],["jsfi-header",[[1,"jsfi-header"]]]], options);
});
