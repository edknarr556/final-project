import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class VjjlMatchCard extends DDDSuper(LitElement) {
  static get styles() {
    return [super.styles, css`
      :host {
        background: white;
        padding: var(--ddd-spacing-5);
        border-bottom: 5px solid var(--ddd-theme-default-original87Red);
        border-radius: var(--ddd-radius-sm);
      }
    `];
  }
  render() { return html`<h3>Weekly Matchup</h3><p>Location: Sector B</p>`; }
}
customElements.define('vjjl-match-card', VjjlMatchCard);

export class VjjlScheduleBand extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-schedule-band"; }
  static get styles() {
    return [super.styles, css`
      .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; padding: 40px; }
    `];
  }
  render() {
    return html`
      <section class="grid">
        <vjjl-match-card></vjjl-match-card>
        <vjjl-match-card></vjjl-match-card>
        <vjjl-match-card></vjjl-match-card>
      </section>
    `;
  }
}
customElements.define(VjjlScheduleBand.tag, VjjlScheduleBand);