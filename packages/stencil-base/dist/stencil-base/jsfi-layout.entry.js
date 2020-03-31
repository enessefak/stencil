import { r as registerInstance, h, H as Host } from './core-183848b9.js';

const Layout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    toggleAsideHandler() {
        this.open = !this.open;
    }
    render() {
        return (h(Host, { class: {
                layout: true,
                'layout--open': this.open
            } }, h("slot", { name: "aside" }), h("jsfi-header", null, h("slot", { name: "header" })), h("div", { class: "content" }, h("slot", null))));
    }
    static get style() { return ".layout {\n  display: grid;\n  grid-template-areas: \"aside header\" \"aside content\";\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: auto 1fr;\n  height: 100vh;\n  width: 100%;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.layout--open {\n  grid-template-columns: 70px 1fr;\n}\n.layout ::slotted(header) {\n  grid-area: header;\n}\n.layout .content {\n  grid-area: content;\n  background: #f2f2f2;\n  padding: 1.5rem 1.7rem;\n}\n.layout ::slotted(aside) {\n  grid-area: aside;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}"; }
};

export { Layout as jsfi_layout };
