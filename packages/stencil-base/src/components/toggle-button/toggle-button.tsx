import { Component, Host, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "jsfi-toggle-button",
  styleUrl: "toggle-button.scss",
  shadow: true
})
export class ToggleButton {
  @Event() menuToggle: EventEmitter;

  menuToggleHandler(e) {
    this.menuToggle.emit(e);
  }

  render() {
    return (
      <Host>
        <button class="toggle-btn" onClick={e => this.menuToggleHandler(e)}>
          <jsfi-icon name="reorder-three-outline" size="large" />
        </button>
      </Host>
    );
  }
}
