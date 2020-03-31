import { Host, h } from "@stencil/core";
export class Layout {
    toggleAsideHandler() {
        this.open = !this.open;
    }
    render() {
        return (h(Host, { class: {
                layout: true,
                'layout--open': this.open
            } },
            h("slot", { name: "aside" }),
            h("jsfi-header", null,
                h("slot", { name: "header" })),
            h("div", { class: "content" },
                h("slot", null))));
    }
    static get is() { return "jsfi-layout"; }
    static get originalStyleUrls() { return {
        "$": ["layout.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["layout.css"]
    }; }
    static get states() { return {
        "open": {}
    }; }
    static get listeners() { return [{
            "name": "menuToggle",
            "method": "toggleAsideHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
