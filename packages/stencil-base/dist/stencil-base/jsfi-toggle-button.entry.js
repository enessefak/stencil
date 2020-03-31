import { r as registerInstance, d as createEvent, h, H as Host } from './core-183848b9.js';

const ToggleButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuToggle = createEvent(this, "menuToggle", 7);
    }
    menuToggleHandler(e) {
        this.menuToggle.emit(e);
    }
    render() {
        return (h(Host, null, h("button", { class: "toggle-btn", onClick: e => this.menuToggleHandler(e) }, h("jsfi-icon", { name: "reorder-three-outline", size: "large" }))));
    }
    static get style() { return ":host .toggle-btn {\n  border: none;\n  padding: 0;\n}\n:host .toggle-btn:hover {\n  cursor: pointer;\n}\n:host .toggle-btn:focus {\n  outline: none;\n}"; }
};

export { ToggleButton as jsfi_toggle_button };
