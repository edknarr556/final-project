import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlHero extends DDDSuper(LitElement) {
  static get tag() { return "vjjl-hero"; }
  static get properties() { return { index: { type: Number } }; }

  constructor() {
    super();
    this.index = 0;
    this.imgs = [
      "carjitsu.jpg", 
      "84655639-13396269-image-a-34_1715252264142.jpg", 
      "wx4gcaucgiqjqbhdzedw.jpg.avif"
    ];
  }

  firstUpdated() {
    setInterval(() => {
      this.index = (this.index + 1) % this.imgs.length;
    }, 4000);
  }

  static get styles() {
    return [super.styles, css`
      .hero {
        position: relative;
        height: 550px;
        background: black;
        overflow: hidden;
      }
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.8s ease-in-out;
      }
      img.active { opacity: 0.6; }
      
      .progress-container {
        position: absolute;
        top: 15px;
        left: 10px;
        right: 10px;
        display: flex;
        gap: 5px;
        z-index: 10;
      }
      .bar { height: 3px; flex: 1; background: rgba(255,255,255,0.3); border-radius: 2px; }
      .bar.fill { background: white; }

      .content {
        position: relative;
        z-index: 5;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
      }
      h1 { font-size: 4rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.8); }
    `];
  }

  render() {
    return html`
      <div class="hero">
        <div class="progress-container">
          ${this.imgs.map((_, i) => html`<div class="bar ${i <= this.index ? 'fill' : ''}"></div>`)}
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