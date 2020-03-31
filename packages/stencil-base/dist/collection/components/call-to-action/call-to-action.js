import { Host, h } from "@stencil/core";
export class CallToAction {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "jsfi-call-to-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["call-to-action.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["call-to-action.css"]
    }; }
}
