import { Host, h } from "@stencil/core";
export class Label {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "jsfi-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["label.css"]
    }; }
    static get styleUrls() { return {
        "$": ["label.css"]
    }; }
}
