import { r as registerInstance, h } from './core-183848b9.js';

const JsfiInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = "text";
    }
    render() {
        return (h("input", { class: "input", type: this.type, placeholder: this.placeholder }));
    }
    static get style() { return ".input {\n  display: block;\n  line-height: 1;\n  color: #495057;\n  background-color: #ffffff;\n  border: 1px solid #ced4da;\n  border-radius: 2px;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  font-weight: 400;\n  font-size: 0.8125rem;\n  padding: 0.5rem 0.81rem;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.input:focus {\n  outline: none;\n  border: 1px solid #80bdff;\n}"; }
};

export { JsfiInput as jsfi_input };
