import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jsfi-label',
  styleUrl: 'label.css',
  shadow: true
})
export class Label {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
