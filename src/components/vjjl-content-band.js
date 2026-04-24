import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlContentBand extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-content-band"; }

  static get styles() {
    return [super.styles, css`
      section {
        padding: 2rem;
        margin: 2rem;
        background: var(--vjjl-header);
        color: var(--vjjl-text);
        border-radius: 8px;
      }
    `];
  }

  render() {
    return html`<section><slot></slot></section>`;
  }
}

customElements.define(VjjlContentBand.tag, VjjlContentBand);