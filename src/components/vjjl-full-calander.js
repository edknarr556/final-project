import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlFullCalendar extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-full-calendar"; }
  static get styles() {
    return [super.styles, css`
      :host { display: block; padding: 40px; }
      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        background: var(--vjjl-card-bg, #fff);
        padding: 20px;
        border-radius: 12px;
      }
      .day {
        min-height: 120px;
        border: 1px solid #ccc;
        padding: 10px;
      }
      .header-day { font-weight: bold; text-align: center; padding: 10px; background: #eee; color: #000; }
    `];
  }

  render() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return html`
      <h2 style="color: white; text-align: center;">League Full Schedule</h2>
      <div class="calendar-grid">
        ${days.map(d => html`<div class="header-day">${d}</div>`)}
        ${Array(31).fill(0).map((_, i) => html`
          <div class="day">
            <span>${i + 1}</span>
            ${(i + 1) % 5 === 0 ? html`<div style="color: red; font-size: 12px;">Match Day</div>` : ""}
          </div>
        `)}
      </div>
    `;
  }
}
customElements.define(VjjlFullCalendar.tag, VjjlFullCalendar);