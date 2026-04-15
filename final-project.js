/**
 * Copyright 2026 Elijah Knarr
 * @license Apache-2.0, see LICENSE for full text.
 */
/**
 * Copyright 2026 Elijah Knarr
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * Skeletal Components for VJJL
 * Use these tags in your main render method below.
 */
class VjjlMenu extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-menu'; }
  render() { return html`<div>Menu Component</div>`; } 
}
customElements.define(VjjlMenu.tag, VjjlMenu);

class VjjlProfile extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-profile'; }
  render() { return html`<div>Profile Component</div>`; } 
}
customElements.define(VjjlProfile.tag, VjjlProfile);

class VjjlLogin extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-login'; }
  render() { return html`<div>Login Page</div>`; } 
}
customElements.define(VjjlLogin.tag, VjjlLogin);

class VjjlCalendar extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-calendar'; }
  render() { return html`<div>Calendar Component</div>`; } 
}
customElements.define(VjjlCalendar.tag, VjjlCalendar);

class VjjlImages extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-images'; }
  render() { return html`<div>Images Component</div>`; } 
}
customElements.define(VjjlImages.tag, VjjlImages);

class VjjlSearch extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-search'; }
  render() { return html`<div>Search Bar</div>`; } 
}
customElements.define(VjjlSearch.tag, VjjlSearch);

class VjjlSocial extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-social'; }
  render() { return html`<div>Social Links</div>`; } 
}
customElements.define(VjjlSocial.tag, VjjlSocial);

class VjjlLogo extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-logo'; }
  render() { return html`<div>Logo Component</div>`; } 
}
customElements.define(VjjlLogo.tag, VjjlLogo);

class VjjlTheme extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-theme'; }
  render() { return html`<div>Dark Mode Toggle</div>`; } 
}
customElements.define(VjjlTheme.tag, VjjlTheme);

class VjjlA11y extends DDDSuper(LitElement) { 
  static get tag() { return 'vjjl-a11y'; }
  render() { return html`<div>Accessibility Panel</div>`; } 
}
customElements.define(VjjlA11y.tag, VjjlA11y);


export class FinalProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "final-project";
  }

  constructor() {
    super();
    this.title = "VJJL Dashboard";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/final-project.ar.json", import.meta.url).href +
        "/../",
    });
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--ddd-spacing-4);
      }
    `];
  }

  render() {
    return html`
<div class="wrapper">
  <vjjl-logo></vjjl-logo>
  <vjjl-menu></vjjl-menu>
  <vjjl-theme></vjjl-theme>
  
  <vjjl-search></vjjl-search>
  
  <div class="grid-container">
    <vjjl-profile></vjjl-profile>
    <vjjl-calendar></vjjl-calendar>
    <vjjl-images></vjjl-images>
  </div>

  <vjjl-login></vjjl-login>
  <vjjl-a11y></vjjl-a11y>
  <vjjl-social></vjjl-social>
</div>`;
  }
}

customElements.define(FinalProject.tag, FinalProject);