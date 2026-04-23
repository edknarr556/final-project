import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlEventStrip extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-event-strip"; }
  
  static get styles() {
    return [super.styles, css`
      .container {
        display: flex;
        align-items: center;
        background: #f4f4f4;
        padding: 20px;
        gap: 20px;
      }
      .today-tab {
        background: var(--ddd-theme-default-original87Red);
        color: white;
        padding: 15px 25px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
      }
      .scroll-wrapper {
        display: flex;
        overflow-x: auto;
        gap: 15px;
        padding-bottom: 10px;
      }
      .card {
        min-width: 200px;
        background: white;
        padding: 15px;
        border-radius: 8px;
        border-bottom: 5px solid #ccc;
        cursor: pointer;
      }
      /* Weight Class Colors */
      .feather { border-color: #27ae60; }
      .middle { border-color: #f1c40f; }
      .heavy { border-color: #e74c3c; }
      .open { border-color: #9b59b6; }
      
      .is-today { background: #ffebeb; border-bottom-color: var(--ddd-theme-default-original87Red); }
      .time { font-size: 0.8rem; color: #666; }
    `];
  }

  render() {
    const events = [
      { day: "Mon", time: "5:00 PM", name: "Featherweight Match", class: "feather", today: true },
      { day: "Tue", time: "6:30 PM", name: "Middleweight Open", class: "middle", today: false },
      { day: "Wed", time: "7:00 PM", name: "Heavyweight Finals", class: "heavy", today: false },
      { day: "Thu", time: "8:00 PM", name: "Open Div Quals", class: "open", today: false },
      { day: "Fri", time: "6:00 PM", name: "League Night", class: "heavy", today: false }
    ];

    return html`
      <div class="container">
        <div class="today-tab">TODAY</div>
        <div class="scroll-wrapper">
          ${events.map(e => html`
            <div class="card ${e.class} ${e.today ? 'is-today' : ''}">
              <div class="time">${e.day} @ ${e.time}</div>
              <strong>${e.name}</strong>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}
customElements.define(VjjlEventStrip.tag, VjjlEventStrip);