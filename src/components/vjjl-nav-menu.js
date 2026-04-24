import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlNavMenu extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-nav-menu"; }
  static get properties() { return { items: { type: Array }, currentPage: { type: String } }; }
  static get styles() {
    return [super.styles, css`
      .menu { display: flex; gap: var(--ddd-spacing-4); }
      a { 
        text-decoration: none; color: inherit; font-family: var(--ddd-font-navigation); 
        font-weight: 700; padding: var(--ddd-spacing-2); 
      }
      a.active { border-bottom: 3px solid var(--ddd-theme-default-original87Red); }
    `];
  }
  goToPage(page, e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("page-changed", { detail: { page }, bubbles: true, composed: true }));
  }
  render() {
    return html`<nav class="menu">${this.items.map(item => html`
      <a href="?page=${item.page}" class="${this.currentPage === item.page ? "active" : ""}" 
         @click="${(e) => this.goToPage(item.page, e)}">${item.title}</a>
    `)}</nav>`;
  }
}
customElements.define(VjjlNavMenu.tag, VjjlNavMenu);