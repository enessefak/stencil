import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "jsfi-button",
  styleUrl: "button.scss",
  shadow: true
})
export class JsfiButton {
  /**
   * Color field
   */
  @Prop() color: string = "blue";

  /**
   * Size field
   */
  @Prop() size: string;

  /**
   * Outline field
   */
  @Prop() outline: boolean;

  /**
   * Radius field
   */
  @Prop() radius: boolean;

  /**
   * Icon field
   */
  @Prop() icon: string;

  render() {
    return (
      <button
        class={{
          btn: true,
          [`btn--${this.color}`]: !!this.color,
          [`btn--${this.size}`]: !!this.size,
          "btn--outline": this.outline,
          "btn--radius": this.radius
        }}
      >
        {this.icon && (
          <jsfi-icon class="btn__icon" name={this.icon}></jsfi-icon>
        )}
        <slot />
      </button>
    );
  }
}
