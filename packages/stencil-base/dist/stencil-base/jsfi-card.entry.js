import { r as registerInstance, h, H as Host } from './core-183848b9.js';

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    menuToggleHandler() {
        console.dir(this);
    }
    render() {
        return (h(Host, { class: "card" }, h("div", { class: "card__header" }, h("slot", { name: "header" })), h("div", { class: "card__content" }, h("slot", null)), h("div", { class: "card__footer" }, h("slot", { name: "footer" }))));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid #e0e0ef;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  border-radius: 0.375rem;\n  background-color: #fff;\n  margin-top: 1rem;\n  margin-top: 1rem;\n}\n\n.card__content {\n  padding: 1.5rem 1.5rem;\n}"; }
};

export { Card as jsfi_card };
