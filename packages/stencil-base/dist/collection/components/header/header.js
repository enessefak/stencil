import { Host, h } from "@stencil/core";
export class Header {
    render() {
        return (h(Host, { class: "header" },
            h("jsfi-toggle-button", null),
            h("slot", null)));
    }
    static get is() { return "jsfi-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["header.css"]
    }; }
}
