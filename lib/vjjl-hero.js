import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlHero extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-hero"; }
  static get properties() { return { index: { type: Number } }; }

  constructor() {
    super();
    this.index = 0;
    // These are placeholders. Replace them with your filenames later!
    this.imgs = [
      "https://picsum.photos/id/1070/1200/500", // Car Jitsu placeholder
      "https://picsum.photos/id/1071/1200/500", 
      "https://picsum.photos/id/1072/1200/500"
    ];
  }

  firstUpdated() {
    setInterval(() => {
      this.index = (this.index + 1) % this.imgs.length;
    }, 4000);
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .hero {
        position: relative;
        height: 500px;
        background: var(--ddd-theme-default-coalyGray);
        overflow: hidden;
      }
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }
      img.active { opacity: 0.5; }
      .progress-container {
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        display: flex;
        gap: 8px;
        z-index: 10;
      }
      .bar { height: 4px; flex: 1; background: rgba(255,255,255,0.3); border-radius: 2px; }
      .bar.active { background: var(--ddd-theme-default-original87Red); }
      .content {
        position: relative;
        z-index: 5;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-align: center;
      }
      h1 { 
        font-family: var(--ddd-font-navigation);
        font-size: 4rem; 
        text-transform: uppercase;
        margin: 0;
      }
    `];
  }

  render() {
    return html`
      <div class="hero">
        <div class="progress-container">
          ${this.imgs.map((_, i) => html`<div class="bar ${i === this.index ? 'active' : ''}"></div>`)}
        </div>
        ${this.imgs.map((src, i) => html`<img src="${src}" class="${this.index === i ? 'active' : ''}">`)}
        <div class="content">
          <h1>Welcome to the VJJL</h1>
        </div>
      </div>
    `;
  }
}
customElements.define(VjjlHero.tag, VjjlHero);