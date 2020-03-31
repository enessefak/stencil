import { r as registerInstance, h, H as Host } from './core-183848b9.js';

const Grid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Rows field
         */
        this.rows = "auto";
        /**
         * Justify Content field
         */
        this.justifyContent = "start";
        /**
         * Grid gap field
         */
        this.gap = "5px";
        /**
         * Columns field
         */
        this.columns = "auto";
    }
    render() {
        return (h(Host, { style: {
                "grid-template-rows": this.rows,
                "grid-template-columns": this.columns,
                "justify-content": this.justifyContent,
                "grid-gap": this.gap
            } }, h("slot", null)));
    }
    static get style() { return ":host {\n  display: grid;\n}"; }
};

export { Grid as jsfi_grid };
