import { r as registerInstance, h } from './core-183848b9.js';

const JsfiFormElement = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "form-element" }, h("label", { class: "form-element__label" }, this.label), h("slot", null)));
    }
    static get style() { return ".form-element {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.form-element__label {\n  display: inline-block;\n  font-family: \"PTSans\", sans-serif;\n  font-weight: initial;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.8125rem;\n  vertical-align: top;\n  margin-bottom: 0.5rem;\n}"; }
};

export { JsfiFormElement as jsfi_form_element };
