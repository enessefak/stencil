import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jsfi-header',
  styleUrl: 'header.scss',
  shadow: true
})
export class Header {
  render() {
    return (
      <Host class="header">
        <jsfi-toggle-button />
        <slot></slot>
      </Host>
    );
  }
}
