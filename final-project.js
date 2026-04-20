/**
 * Copyright 2026 Elijah Knarr
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

class VjjlLogo extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-logo";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-flex;
        }

        .wrap {
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          font-family: var(--ddd-font-navigation);
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .badge {
          width: 52px;
          height: 52px;
          border: var(--ddd-border-sm);
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: light-dark(
            var(--ddd-theme-default-white),
            var(--ddd-theme-default-coalyGray)
          );
          box-shadow: var(--ddd-boxShadow-sm);
          font-size: var(--ddd-font-size-4xs);
        }

        .text {
          display: grid;
          gap: var(--ddd-spacing-1);
        }

        .title {
          font-size: var(--ddd-font-size-xs);
          line-height: 1;
        }

        .sub {
          font-size: var(--ddd-font-size-4xs);
          opacity: 0.8;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrap">
        <div class="badge">VJJL</div>
        <div class="text">
          <div class="title">Vehicular Jiu-Jitsu League</div>
          <div class="sub">Position Before Ignition</div>
        </div>
      </div>
    `;
  }
}
customElements.define(VjjlLogo.tag, VjjlLogo);

class VjjlDarkToggle extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-dark-toggle";
  }

  static get properties() {
    return {
      dark: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.dark = false;
  }

  static get styles() {
    return [
      super.styles,
      css`
        button {
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          background: light-dark(
            var(--ddd-theme-default-white),
            var(--ddd-theme-default-coalyGray)
          );
          color: inherit;
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-4xs);
          cursor: pointer;
          box-shadow: var(--ddd-boxShadow-sm);
        }
      `,
    ];
  }

  toggleMode() {
    this.dark = !this.dark;
    document.documentElement.classList.toggle("vjjl-dark", this.dark);
    this.dispatchEvent(
      new CustomEvent("dark-toggle-changed", {
        detail: { dark: this.dark },
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define(VjjlDarkToggle.tag, VjjlDarkToggle);

class VjjlNavMenu extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-nav-menu";
  }

  static get properties() {
    return {
      items: { type: Array },
      expanded: { type: Boolean, reflect: true },
      currentPage: { type: String, attribute: "current-page" },
    };
  }

  constructor() {
    super();
    this.items = [];
    this.expanded = false;
    this.currentPage = "home";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
        }

        .menu {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: var(--ddd-spacing-3);
          flex-wrap: wrap;
        }

        .primary,
        .secondary {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          flex-wrap: wrap;
        }

        .secondary {
          width: 100%;
          justify-content: flex-end;
          padding-top: var(--ddd-spacing-2);
        }

        button,
        a {
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          text-decoration: none;
          color: inherit;
          background: transparent;
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-4xs);
          cursor: pointer;
        }

        a.active {
          background: light-dark(
            var(--ddd-theme-default-limestone),
            var(--ddd-theme-default-slateGray)
          );
          box-shadow: var(--ddd-boxShadow-sm);
        }

        @media (max-width: 768px) {
          .menu,
          .primary,
          .secondary {
            justify-content: flex-start;
          }
        }
      `,
    ];
  }

  get primaryItems() {
    return this.items.slice(0, 4);
  }

  get secondaryItems() {
    return this.items.slice(4);
  }

  goToPage(page, e) {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set("page", page);
    window.history.pushState({}, "", url);
    this.dispatchEvent(
      new CustomEvent("page-changed", {
        detail: { page },
        bubbles: true,
        composed: true,
      })
    );
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  renderLink(item) {
    return html`
      <a
        href="?page=${item.page}"
        class=${this.currentPage === item.page ? "active" : ""}
        @click=${(e) => this.goToPage(item.page, e)}
      >
        ${item.title}
      </a>
    `;
  }

  render() {
    return html`
      <div class="menu">
        <div class="primary">
          ${this.primaryItems.map((item) => this.renderLink(item))}
        </div>
        ${this.expanded && this.secondaryItems.length
          ? html`<div class="secondary">${this.secondaryItems.map((item) => this.renderLink(item))}</div>`
          : ""}
      </div>
    `;
  }
}
customElements.define(VjjlNavMenu.tag, VjjlNavMenu);

class VjjlHeroBanner extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-hero-banner";
  }

  static get properties() {
    return {
      heading: { type: String },
      subheading: { type: String },
      Text: { type: String },
    };
  }

  constructor() {
    super();
    this.heading = "Welcome to VJJL";
    this.subheading = "A prototype homepage.";
    this.Text = "testing testing 1, 2.";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .hero {
          display: grid;
          gap: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-10) var(--ddd-spacing-6);
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-xl);
          background: linear-gradient(
            135deg,
            light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray)),
            light-dark(var(--ddd-theme-default-limestone), var(--ddd-theme-default-slateGray))
          );
          box-shadow: var(--ddd-boxShadow-sm);
        }

        .eyebrow {
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-4xs);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        h1 {
          margin: 0;
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-2xl);
          line-height: 1.05;
        }

        h2 {
          margin: 0;
          font-size: var(--ddd-font-size-s);
          font-weight: 500;
        }

        p {
          margin: 0;
          max-width: 70ch;
          font-size: var(--ddd-font-size-xs);
          line-height: 1.5;
        }
      `,
    ];
  }

  render() {
    return html`
      <section class="hero">
        <div class="eyebrow">Vehicular Jiu-Jitsu League</div>
        <h1>${this.heading}</h1>
        <h2>${this.subheading}</h2>
        <p>${this.Text}</p>
      </section>
    `;
  }
}
customElements.define(VjjlHeroBanner.tag, VjjlHeroBanner);

class VjjlContentBand extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-content-band";
  }

  static get properties() {
    return {
      heading: { type: String },
      content: { type: String },
    };
  }

  constructor() {
    super();
    this.heading = "Band Heading";
    this.content = "Band content goes here.";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .band {
          padding: var(--ddd-spacing-6);
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-lg);
          background: light-dark(
            var(--ddd-theme-default-white),
            var(--ddd-theme-default-coalyGray)
          );
          box-shadow: var(--ddd-boxShadow-sm);
        }

        h3 {
          margin: 0 0 var(--ddd-spacing-3);
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-m);
        }

        p {
          margin: 0;
          line-height: 1.5;
          font-size: var(--ddd-font-size-xs);
        }
      `,
    ];
  }

  render() {
    return html`
      <section class="band">
        <h3>${this.heading}</h3>
        <p>${this.content}</p>
      </section>
    `;
  }
}
customElements.define(VjjlContentBand.tag, VjjlContentBand);

class VjjlScheduleItem extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-schedule-item";
  }

  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      location: { type: String },
      status: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Match Title";
    this.date = "Date";
    this.location = "Location";
    this.status = "Upcoming";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .item {
          display: grid;
          gap: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-lg);
          background: light-dark(
            var(--ddd-theme-default-white),
            var(--ddd-theme-default-slateGray)
          );
        }

        .status {
          display: inline-flex;
          width: fit-content;
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-md);
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-5xs);
        }

        .title {
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-xs);
          font-weight: 700;
        }

        .meta {
          font-size: var(--ddd-font-size-4xs);
          opacity: 0.9;
        }
      `,
    ];
  }

  render() {
    return html`
      <article class="item">
        <div class="status">${this.status}</div>
        <div class="title">${this.title}</div>
        <div class="meta">${this.date}</div>
        <div class="meta">${this.location}</div>
      </article>
    `;
  }
}
customElements.define(VjjlScheduleItem.tag, VjjlScheduleItem);

class VjjlScheduleBand extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-schedule-band";
  }

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  static get styles() {
    return [
      super.styles,
      css`
        .wrap {
          display: grid;
          gap: var(--ddd-spacing-4);
        }

        .heading {
          display: flex;
          justify-content: space-between;
          gap: var(--ddd-spacing-2);
          align-items: center;
          flex-wrap: wrap;
        }

        h3 {
          margin: 0;
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-m);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: var(--ddd-spacing-4);
        }
      `,
    ];
  }
}
customElements.define(VjjlScheduleBand.tag, VjjlScheduleBand);

class VjjlTeamCard extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-team-card";
  }

  static get properties() {
    return {
      name: { type: String },
      role: { type: String },
      rank: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Competitor Name";
    this.role = "Driver";
    this.rank = "Blue Belt";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .card {
          display: grid;
          gap: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-4);
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-lg);
          background: light-dark(
            var(--ddd-theme-default-white),
            var(--ddd-theme-default-coalyGray)
          );
          box-shadow: var(--ddd-boxShadow-sm);
        }

        .image {
          min-height: 140px;
          border-radius: var(--ddd-radius-md);
          border: var(--ddd-border-xs);
          background: light-dark(
            var(--ddd-theme-default-limestone),
            var(--ddd-theme-default-slateGray)
          );
        }

        .name {
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-xs);
          font-weight: 700;
        }

        .meta {
          font-size: var(--ddd-font-size-4xs);
        }
      `,
    ];
  }

  render() {
    return html`
      <article class="card">
        <div class="image" aria-hidden="true"></div>
        <div class="name">${this.name}</div>
        <div class="meta">${this.role}</div>
        <div class="meta">${this.rank}</div>
      </article>
    `;
  }
}
customElements.define(VjjlTeamCard.tag, VjjlTeamCard);

class VjjlTeamGrid extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-team-grid";
  }

  static get properties() {
    return {
      members: { type: Array },
    };
  }

  constructor() {
    super();
    this.members = [];
  }

  static get styles() {
    return [
      super.styles,
      css`
        .wrap {
          display: grid;
          gap: var(--ddd-spacing-4);
        }

        h3 {
          margin: 0;
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-m);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: var(--ddd-spacing-4);
        }
      `,
    ];
  }

  render() {
    return html`
      <section class="wrap">
        <h3>Meet the Team</h3>
        <div class="grid">
          ${this.members.map(
            (member) => html`
              <vjjl-team-card
                .name=${member.name}
                .role=${member.role}
                .rank=${member.rank}
              ></vjjl-team-card>
            `
          )}
        </div>
      </section>
    `;
  }
}
customElements.define(VjjlTeamGrid.tag, VjjlTeamGrid);

class VjjlSocialLink extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-social-link";
  }

  static get properties() {
    return {
      label: { type: String },
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.label = "Instagram";
    this.href = "#";
  }

  static get styles() {
    return [
      super.styles,
      css`
        a {
          text-decoration: none;
          color: inherit;
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-4xs);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          border-radius: var(--ddd-radius-sm);
        }

        a:hover,
        a:focus-visible {
          background: light-dark(
            var(--ddd-theme-default-limestone),
            var(--ddd-theme-default-slateGray)
          );
        }
      `,
    ];
  }

  render() {
    return html`<a href=${this.href}>${this.label}</a>`;
  }
}
customElements.define(VjjlSocialLink.tag, VjjlSocialLink);

class VjjlSiteFooter extends DDDSuper(LitElement) {
  static get tag() {
    return "vjjl-site-footer";
  }

  static get styles() {
    return [
      super.styles,
      css`
        footer {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--ddd-spacing-4);
          align-items: center;
          border-top: var(--ddd-border-xs);
          padding-top: var(--ddd-spacing-5);
        }

        .copy {
          font-size: var(--ddd-font-size-4xs);
        }

        .links {
          display: flex;
          gap: var(--ddd-spacing-2);
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          footer {
            grid-template-columns: 1fr;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <footer>
        <div class="copy">© 2026 Vehicular Jiu-Jitsu League</div>
        <div class="links">
          <vjjl-social-link label="Facebook"></vjjl-social-link>
          <vjjl-social-link label="Twitter"></vjjl-social-link>
          <vjjl-social-link label="Instagram"></vjjl-social-link>
        </div>
      </footer>
    `;
  }
}
customElements.define(VjjlSiteFooter.tag, VjjlSiteFooter);

export class FinalProject extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "final-project";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      page: { type: String, reflect: true },
      menuItems: { type: Array },
      scheduleItems: { type: Array },
      teamMembers: { type: Array },
    };
  }

  constructor() {
    super();
    this.title = "VJJL";
    this.page = this.getPageFromUrl();
    this.menuItems = [
      { title: "Home", page: "home" },
      { title: "Schedule", page: "schedule" },
      { title: "Team", page: "team" },
      { title: "About", page: "about" },
      { title: "Rules", page: "rules" },
      { title: "Rankings", page: "rankings" },
    ];
    this.scheduleItems = [
      {
        title: "East Regional Grapple Drive",
        date: "May 18, 2026 · 7:00 PM",
        location: "Pittsburgh, PA",
        status: "Upcoming",
      },
      {
        title: "Summer Submission Cup",
        date: "June 2, 2026 · 6:30 PM",
        location: "Columbus, OH",
        status: "Open",
      },
      {
        title: "Night Shift No-Gi Clash",
        date: "June 15, 2026 · 8:00 PM",
        location: "State College, PA",
        status: "Featured",
      },
    ];
    this.teamMembers = [
      { name: "Avery Cross", role: "Driver", rank: "Blue Belt" },
      { name: "Mika Torres", role: "Coach", rank: "Brown Belt" },
      { name: "Jordan Vale", role: "Competitor", rank: "Purple Belt" },
      { name: "Reese Carter", role: "Referee", rank: "Black Belt" },
    ];

    this.t = {
      title: "Vehicular Jiu-Jitsu League",
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this.handlePopState);
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this.handlePopState);
    super.disconnectedCallback();
  }

  handlePopState = () => {
    this.page = this.getPageFromUrl();
  };

  getPageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
  }

  handlePageChanged(e) {
    this.page = e.detail.page;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-height: 100vh;
          color: light-dark(
            var(--ddd-theme-default-coalyGray),
            var(--ddd-theme-default-white)
          );
          background: light-dark(
            var(--ddd-theme-default-limestone),
            var(--ddd-theme-default-black)
          );
          font-family: var(--ddd-font-primary);
        }

        :host([page="home"]) {
          --vjjl-accent: var(--ddd-theme-primary);
        }

        .page {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--ddd-spacing-4);
          display: grid;
          gap: var(--ddd-spacing-6);
        }

        header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: var(--ddd-spacing-4);
          align-items: center;
          padding-bottom: var(--ddd-spacing-4);
          border-bottom: var(--ddd-border-xs);
        }

        .nav-wrap {
          display: flex;
          justify-content: flex-end;
        }

        .main {
          display: grid;
          gap: var(--ddd-spacing-6);
        }

        .two-col {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: var(--ddd-spacing-4);
        }

        @media (max-width: 900px) {
          header,
          .two-col {
            grid-template-columns: 1fr;
          }

          .nav-wrap {
            justify-content: flex-start;
          }
        }
      `,
    ];
  }

  renderPage() {
    switch (this.page) {
      case "schedule":
        return html`
          <vjjl-content-band
            heading="Schedule Overview"
            content="This for the schedule."
          ></vjjl-content-band>
          <vjjl-schedule-band .items=${this.scheduleItems}></vjjl-schedule-band>
        `;
      case "team":
        return html`
          <vjjl-content-band
            heading="Team Directory"
            content="See the teams."
          ></vjjl-content-band>
          <vjjl-team-grid .members=${this.teamMembers}></vjjl-team-grid>
        `;
      case "about":
        return html`
          <vjjl-content-band
            heading="About VJJL"
            content="Vehicular Jiu-Jitsu League is a sports association."
          ></vjjl-content-band>
        `;
      default:
        return html`
          <vjjl-hero-banner></vjjl-hero-banner>
          <div class="two-col">
            <vjjl-content-band
              heading="League Snapshot"
              content="Explore upcoming matches, featured competitors, league rules."
            ></vjjl-content-band>
            <vjjl-content-band
              heading="Prototype Goals"
              content="This is goals."
            ></vjjl-content-band>
          </div>
          <vjjl-schedule-band .items=${this.scheduleItems}></vjjl-schedule-band>
          <vjjl-team-grid .members=${this.teamMembers}></vjjl-team-grid>
        `;
    }
  }

  render() {
    return html`
      <div class="page">
        <header>
          <vjjl-logo></vjjl-logo>
          <div class="nav-wrap">
            <vjjl-nav-menu
              .items=${this.menuItems}
              .currentPage=${this.page}
              @page-changed=${this.handlePageChanged}
            ></vjjl-nav-menu>
          </div>
          <vjjl-dark-toggle></vjjl-dark-toggle>
        </header>

        <main class="main">
          ${this.renderPage()}
        </main>

        <vjjl-site-footer></vjjl-site-footer>
      </div>
    `;
  }
}

customElements.define(FinalProject.tag, FinalProject);
