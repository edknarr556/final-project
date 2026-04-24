import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./vjjl-social-link.js";

export class VjjlFooter extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-footer"; }

  static get styles() {
    return [super.styles, css`
      footer {
        padding: 2rem;
        text-align: center;
        background: var(--vjjl-header);
        color: var(--vjjl-text);
        margin-top: 2rem;
      }

      .links {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
      }
    `];
  }

  render() {
    return html`
      <footer>
        <div>© 2026 VJJL</div>
        <div class="links">
          <vjjl-social-link name="Instagram"></vjjl-social-link>
          <vjjl-social-link name="Twitter"></vjjl-social-link>
          <vjjl-social-link name="YouTube"></vjjl-social-link>
        </div>
      </footer>
    `;
  }
}

customElements.define(VjjlFooter.tag, VjjlFooter);