import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "jsfi-input",
  styleUrl: "input.scss",
  shadow: true
})
export class JsfiInput {
  @Prop() placeholder?: string;
  @Prop() type: string = "text";

  render() {
    return (
      <input class="input" type={this.type} placeholder={this.placeholder} />
    );
  }
}
