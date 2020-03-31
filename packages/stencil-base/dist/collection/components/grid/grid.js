import { Host, h } from "@stencil/core";
export class Grid {
    constructor() {
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
            } },
            h("slot", null)));
    }
    static get is() { return "jsfi-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["grid.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["grid.css"]
    }; }
    static get properties() { return {
        "rows": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Rows field"
            },
            "attribute": "rows",
            "reflect": false,
            "defaultValue": "\"auto\""
        },
        "justifyContent": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Justify Content field"
            },
            "attribute": "justify-content",
            "reflect": false,
            "defaultValue": "\"start\""
        },
        "gap": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Grid gap field"
            },
            "attribute": "gap",
            "reflect": false,
            "defaultValue": "\"5px\""
        },
        "columns": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Columns field"
            },
            "attribute": "columns",
            "reflect": false,
            "defaultValue": "\"auto\""
        }
    }; }
}
