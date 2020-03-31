import { Host, h } from "@stencil/core";
export class Card {
    menuToggleHandler() {
        console.dir(this);
    }
    render() {
        return (h(Host, { class: "card" },
            h("div", { class: "card__header" },
                h("slot", { name: "header" })),
            h("div", { class: "card__content" },
                h("slot", null)),
            h("div", { class: "card__footer" },
                h("slot", { name: "footer" }))));
    }
    static get is() { return "jsfi-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
    }; }
    static get listeners() { return [{
            "name": "click",
            "method": "menuToggleHandler",
            "target": undefined,
            "capture": true,
            "passive": false
        }]; }
}
