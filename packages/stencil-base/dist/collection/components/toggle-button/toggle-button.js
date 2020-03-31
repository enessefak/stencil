import { Host, h } from "@stencil/core";
export class ToggleButton {
    menuToggleHandler(e) {
        this.menuToggle.emit(e);
    }
    render() {
        return (h(Host, null,
            h("button", { class: "toggle-btn", onClick: e => this.menuToggleHandler(e) },
                h("jsfi-icon", { name: "reorder-three-outline", size: "large" }))));
    }
    static get is() { return "jsfi-toggle-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["toggle-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["toggle-button.css"]
    }; }
    static get events() { return [{
            "method": "menuToggle",
            "name": "menuToggle",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
