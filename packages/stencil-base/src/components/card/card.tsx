import { Component, Listen, Host, h } from "@stencil/core";

@Component({
  tag: "jsfi-card",
  styleUrl: "card.scss",
  shadow: true
})
export class Card {
  @Listen("click", { capture: true })
  menuToggleHandler() {
    console.dir(this);
  }

  render() {
    return (
      <Host class="card">
        <div class="card__header">
          <slot name="header" />
        </div>
        <div class="card__content">
          <slot />
        </div>
        <div class="card__footer">
          <slot name="footer" />
        </div>
      </Host>
    );
  }
}
