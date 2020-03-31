import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'jsfi-layout',
  styleUrl: 'layout.scss'
})
export class Layout {
  @State() open: boolean;

  @Listen('menuToggle')
  toggleAsideHandler() {
    this.open = !this.open;
  }

  render() {
    return (
      <Host
        class={{
          layout: true,
          'layout--open': this.open
        }}
      >
        <slot name="aside" />
        <jsfi-header>
          <slot name="header" />
        </jsfi-header>
        <div class="content">
          <slot />
        </div>
      </Host>
    );
  }
}
