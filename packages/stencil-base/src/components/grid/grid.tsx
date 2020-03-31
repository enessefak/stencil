import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "jsfi-grid",
  styleUrl: "grid.scss",
  shadow: true
})
export class Grid {
  /**
   * Rows field
   */
  @Prop() rows: string = "auto";

  /**
   * Justify Content field
   */
  @Prop() justifyContent: string = "start";

  /**
   * Grid gap field
   */
  @Prop() gap: string = "5px";

  /**
   * Columns field
   */
  @Prop() columns: string = "auto";

  render() {
    return (
      <Host
        style={{
          "grid-template-rows": this.rows,
          "grid-template-columns": this.columns,
          "justify-content": this.justifyContent,
          "grid-gap": this.gap
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
