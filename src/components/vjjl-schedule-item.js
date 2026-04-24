import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlScheduleItem extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-schedule-item"; }

  static get properties() {
    return {
      title: { type: String },
      date: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      .item {
        padding: 1rem;
        border-bottom: 2px solid var(--ddd-theme-default-original87Red);
      }
    `];
  }

  render() {
    return html`
      <div class="item">
        <strong>${this.title}</strong><br>
        <span>${this.date}</span>
      </div>
    `;
  }
}

customElements.define(VjjlScheduleItem.tag, VjjlScheduleItem);