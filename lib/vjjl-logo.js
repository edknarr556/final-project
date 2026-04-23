import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlLogo extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-logo"; }
  static get styles() {
    return [super.styles, css`
      .circle {
        width: 70px;
        height: 70px;
        background: white;
        border: 3px solid var(--ddd-theme-default-original87Red);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      img {
        width: 85%;
        height: auto;
      }
    `];
  }
  render() {
    return html`<div class="circle"><img src="VJJL.png" alt="VJJL"></div>`;
  }
}
customElements.define(VjjlLogo.tag, VjjlLogo);