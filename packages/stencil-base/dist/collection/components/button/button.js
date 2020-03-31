import { h } from "@stencil/core";
export class JsfiButton {
    constructor() {
        /**
         * Color field
         */
        this.color = "blue";
    }
    render() {
        return (h("button", { class: {
                btn: true,
                [`btn--${this.color}`]: !!this.color,
                [`btn--${this.size}`]: !!this.size,
                "btn--outline": this.outline,
                "btn--radius": this.radius
            } },
            this.icon && (h("jsfi-icon", { class: "btn__icon", name: this.icon })),
            h("slot", null)));
    }
    static get is() { return "jsfi-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "color": {
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
                "text": "Color field"
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"blue\""
        },
        "size": {
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
                "text": "Size field"
            },
            "attribute": "size",
            "reflect": false
        },
        "outline": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Outline field"
            },
            "attribute": "outline",
            "reflect": false
        },
        "radius": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Radius field"
            },
            "attribute": "radius",
            "reflect": false
        },
        "icon": {
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
                "text": "Icon field"
            },
            "attribute": "icon",
            "reflect": false
        }
    }; }
}
