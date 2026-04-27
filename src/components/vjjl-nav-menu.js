import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlNavMenu extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-nav-menu"; }
  static get properties() { return { items: { type: Array }, currentPage: { type: String } }; }
  static get styles() {
    return [super.styles, css`
      .menu {
  display: flex;
  gap: var(--ddd-spacing-4);
  background: var(--ddd-theme-default-original87Red); 
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

a {
  text-decoration: none;
  color: white;              
  font-family: var(--ddd-font-navigation);
  font-weight: 700;
  padding: var(--ddd-spacing-2);
  transition: all 0.2s ease;
}

/* Hover effect */
a:hover {
  background: rgba(0,0,0,0.2);
  border-radius: 4px;
}

/* Active page */
a.active {
  border-bottom: 3px solid white;
}
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