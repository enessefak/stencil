import { r as registerInstance, h, H as Host } from './core-183848b9.js';

const Label = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Label as jsfi_label };
