import { r as registerInstance, h } from './core-183848b9.js';

const JsfiButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Color field
         */
        this.color = "blue";
    }
    render() {
        return (h("button", { class: {
                btn: true,
                [`btn--${this.color}`]: !!this.color,
                [`btn--${this.size}`]: !!this.size,
                "btn--outline": this.outline,
                "btn--radius": this.radius
            } }, this.icon && (h("jsfi-icon", { class: "btn__icon", name: this.icon })), h("slot", null)));
    }
    static get style() { return ".btn {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.625rem 1rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.btn--sm {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.8125rem;\n}\n.btn--blue, .btn--primary {\n  color: #fff;\n  background-color: #0b94f7;\n}\n.btn--blue:hover, .btn--primary:hover {\n  background-color: #077dd2;\n}\n.btn--blue.btn--outline, .btn--outline.btn--primary {\n  background-color: transparent;\n  border-color: #0b94f7;\n  color: #0b94f7;\n}\n.btn--blue.btn--outline:hover, .btn--outline.btn--primary:hover {\n  border-color: #077dd2;\n  color: #077dd2;\n  text-decoration: underline;\n}\n.btn--red {\n  color: #fff;\n  background-color: #ff5e6d;\n}\n.btn--red:hover {\n  background-color: #ff3548;\n}\n.btn--red.btn--outline {\n  background-color: transparent;\n  border-color: #ff5e6d;\n  color: #ff5e6d;\n}\n.btn--red.btn--outline:hover {\n  border-color: #ff3548;\n  color: #ff3548;\n  text-decoration: underline;\n}\n.btn--yellow {\n  color: #212529;\n  background-color: #f5a623;\n}\n.btn--yellow:hover {\n  background-color: #e5930a;\n}\n.btn--yellow.btn--outline {\n  background-color: transparent;\n  border-color: #f5a623;\n  color: #f5a623;\n}\n.btn--yellow.btn--outline:hover {\n  border-color: #e5930a;\n  color: #e5930a;\n  text-decoration: underline;\n}\n.btn--purple {\n  color: #fff;\n  background-color: #392c70;\n}\n.btn--purple:hover {\n  background-color: #2a2053;\n}\n.btn--purple.btn--outline {\n  background-color: transparent;\n  border-color: #392c70;\n  color: #392c70;\n}\n.btn--purple.btn--outline:hover {\n  border-color: #2a2053;\n  color: #2a2053;\n  text-decoration: underline;\n}\n.btn--green {\n  color: #fff;\n  background-color: #04b76b;\n}\n.btn--green:hover {\n  background-color: #038f54;\n}\n.btn--green.btn--outline {\n  background-color: transparent;\n  border-color: #04b76b;\n  color: #04b76b;\n}\n.btn--green.btn--outline:hover {\n  border-color: #038f54;\n  color: #038f54;\n  text-decoration: underline;\n}\n.btn--pink {\n  color: #fff;\n  background-color: #ff5e6d;\n}\n.btn--pink:hover {\n  background-color: #ff3548;\n}\n.btn--pink.btn--outline {\n  background-color: transparent;\n  border-color: #ff5e6d;\n  color: #ff5e6d;\n}\n.btn--pink.btn--outline:hover {\n  border-color: #ff3548;\n  color: #ff3548;\n  text-decoration: underline;\n}\n.btn--radius {\n  border-radius: 10rem;\n}\n.btn:hover {\n  cursor: pointer;\n}\n.btn:focus {\n  outline: none;\n}\n.btn__icon {\n  margin-right: 5px;\n}"; }
};

export { JsfiButton as jsfi_button };
