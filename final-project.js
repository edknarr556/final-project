import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class FinalProject extends DDDSuper(LitElement) {
  static get tag() {
    return "final-project";
  }

  static get properties() {
    return {
      view: { type: String },
      activeIndex: { type: Number }
    };
  }

  constructor() {
    super();
    this.view = "home";
    this.activeIndex = 0;
    // Update these filenames to match exactly what you have in VS Code
    this.images = [
      "image_166fc8.jpg", 
      "image_1664e6.jpg", 
      "image_429960.jpg"
    ];
  }

  firstUpdated() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 5000);
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-height: 100vh;
          font-family: var(--ddd-font-navigation);
          
          /* LIGHT MODE: Red background, White/Black text */
          --vjjl-bg: var(--ddd-theme-default-original87Red);
          --vjjl-header: #ffffff;
          --vjjl-text: #000000;
          --vjjl-accent: #000000;
          background-color: var(--vjjl-bg);
          color: var(--vjjl-text);
        }

        /* DARK MODE: Black background, Red accents, White text */
        @media (prefers-color-scheme: dark) {
          :host {
            --vjjl-bg: #000000;
            --vjjl-header: #1a1a1a;
            --vjjl-text: #ffffff;
            --vjjl-accent: var(--ddd-theme-default-original87Red);
          }
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: var(--vjjl-header);
          border-bottom: 4px solid var(--vjjl-accent);
        }

        .logo-container {
          width: 70px;
          height: 70px;
          background: white;
          border-radius: 50%;
          border: 2px solid var(--ddd-theme-default-original87Red);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .logo-container img {
          width: 90%;
          height: auto;
        }

        nav {
          display: flex;
          gap: 2rem;
        }

        nav a {
          text-decoration: none;
          color: var(--vjjl-text);
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
        }

        nav a:hover {
          color: var(--ddd-theme-default-original87Red);
        }

        /* Hero / Slideshow */
        .hero {
          position: relative;
          height: 500px;
          background: #000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
        }

        .hero img.active {
          opacity: 0.6;
        }

        .hero-overlay {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
          background: rgba(0,0,0,0.4);
          padding: 2rem;
          border: 2px solid var(--ddd-theme-default-original87Red);
        }

        /* Calendar View */
        .calendar-container {
          padding: 2rem;
          background: var(--vjjl-header);
          margin: 2rem;
          border-radius: 8px;
          color: var(--vjjl-text);
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
          margin-top: 1rem;
        }

        .cal-day {
          border: 1px solid #ccc;
          padding: 1rem;
          min-height: 80px;
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <div class="logo-container">
          <img src="image_166c9f.png" alt="VJJL Logo">
        </div>
        <nav>
          <a @click="${() => (this.view = "home")}">Home</a>
          <a @click="${() => (this.view = "schedule")}">Schedule</a>
          <a>Team</a>
          <a>About</a>
        </nav>
      </header>

      <main>
        ${this.view === "home" ? this.renderHome() : this.renderSchedule()}
      </main>
    `;
  }

  renderHome() {
    return html`
      <section class="hero">
        ${this.images.map(
          (img, i) => html`
            <img src="${img}" class="${this.activeIndex === i ? "active" : ""}">
          `
        )}
        <div class="hero-overlay">
          <h1>Welcome to the VJJL</h1>
        </div>
      </section>
      <div style="padding: 20px; background: #eee; color: #000;">
        <strong>Upcoming:</strong> Mon - Featherweight | Tue - Middleweight | Wed - Heavyweight
      </div>
    `;
  }

  renderSchedule() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return html`
      <div class="calendar-container">
        <h2>Full League Calendar</h2>
        <div class="calendar-grid">
          ${days.map(d => html`<div style="font-weight:bold">${d}</div>`)}
          ${Array(28).fill(0).map((_, i) => html`<div class="cal-day">${i + 1}</div>`)}
        </div>
      </div>
    `;
  }
}

customElements.define(FinalProject.tag, FinalProject);