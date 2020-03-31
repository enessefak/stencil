import { r as registerInstance, h, H as Host } from './core-183848b9.js';

const Header = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "header" }, h("jsfi-toggle-button", null), h("slot", null)));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  background: #ffffff;\n  padding-left: 15px;\n  padding-right: 15px;\n  height: 70px;\n}"; }
};

export { Header as jsfi_header };
