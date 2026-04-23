import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlDarkToggle extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-dark-toggle"; }
  static get properties() { return { dark: { type: Boolean, reflect: true } }; }
  constructor() { super(); this.dark = false; }
  static get styles() {
    return [super.styles, css`
      button {
        border: var(--ddd-border-sm); border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-3); cursor: pointer;
        background: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray));
        font-family: var(--ddd-font-navigation); font-size: var(--ddd-font-size-4xs);
      }
    `];
  }
  toggleMode() {
    this.dark = !this.dark;
    document.documentElement.classList.toggle("vjjl-dark", this.dark);
  }
  render() { return html`<button @click="${this.toggleMode}">${this.dark ? "Light Mode" : "Dark Mode"}</button>`; }
}
customElements.define(VjjlDarkToggle.tag, VjjlDarkToggle);