import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "jsfi-form-element",
  styleUrl: "form-element.scss",
  shadow: true
})
export class JsfiFormElement {
  @Prop() label: string;

  render() {
    return (
      <div class="form-element">
        <label class="form-element__label">{this.label}</label>
        <slot />
      </div>
    );
  }
}
