import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "jsfi-call-to-action",
  styleUrl: "call-to-action.scss",
  shadow: true
})
export class CallToAction {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
