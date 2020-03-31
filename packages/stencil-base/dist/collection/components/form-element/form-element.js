import { h } from "@stencil/core";
export class JsfiFormElement {
    render() {
        return (h("div", { class: "form-element" },
            h("label", { class: "form-element__label" }, this.label),
            h("slot", null)));
    }
    static get is() { return "jsfi-form-element"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-element.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-element.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        }
    }; }
}
