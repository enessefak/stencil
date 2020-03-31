import { r as registerInstance, h, H as Host } from './core-183848b9.js';

const CallToAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  background: linear-gradient(85deg, #392c70, #6a005b);\n  padding: 1rem;\n  border: 1px solid #e0e0ef;\n  border-radius: 0.375rem;\n}"; }
};

export { CallToAction as jsfi_call_to_action };
