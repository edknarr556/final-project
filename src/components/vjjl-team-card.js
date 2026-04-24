import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class VjjlTeamCard extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-team-card";
  }

  static get properties() {
    return {
      name: { type: String },
      description: { type: String },
      image: { type: String },
      rank: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Team Name";
    this.description = "Team description goes here.";
    this.image = "images/team-redline.jpg";
    this.rank = "Blue Belt";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .card {
    background: light-dark(#ffffff, #1a1a1a);
    color: light-dark(#000000, #ffffff);
    border-radius: 8px;
    padding: 1rem;
    border-bottom: 5px solid var(--ddd-theme-default-original87Red);
    box-shadow: var(--ddd-boxShadow-sm);
}

        img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 12px;
}

        h3 {
          margin: 0 0 0.5rem;
          font-family: var(--ddd-font-navigation);
        }

        .rank {
          font-weight: bold;
          color: var(--ddd-theme-default-original87Red);
          margin-bottom: 0.5rem;
        }

        p {
          margin: 0;
          line-height: 1.5;
        }
      `,
    ];
  }

  render() {
    return html`
      <article class="card">
        <img src="${this.image}" alt="${this.name}">
        <h3>${this.name}</h3>
        <div class="rank">${this.rank}</div>
        <p>${this.description}</p>
      </article>
    `;
  }
}

customElements.define(VjjlTeamCard.tag, VjjlTeamCard);