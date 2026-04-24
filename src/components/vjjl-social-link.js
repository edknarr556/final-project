import { LitElement, html, css } from "lit";

export class VjjlSocialLink extends LitElement {
  static get tag() {
    return "vjjl-social-link";
  }

  static get properties() {
    return {
      name: { type: String },
      href: { type: String }
    };
  }

  constructor() {
    super();
    this.name = "Link";
    this.href = "#";
  }

  static get styles() {
    return css`
      a {
        color: var(--ddd-theme-default-original87Red);
        font-weight: bold;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`<a href="${this.href}">${this.name}</a>`;
  }
}

customElements.define(VjjlSocialLink.tag, VjjlSocialLink);