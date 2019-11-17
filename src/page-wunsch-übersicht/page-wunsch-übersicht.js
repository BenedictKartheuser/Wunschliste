class Wunschübersicht {
  constructor(app) {
      this._app = app;
  }

  async show() {
    console.log('show');
      let html = await fetch("page-wunsch-übersicht/page-wunsch-übersicht.html")
      let css = await fetch("page-wunsch-übersicht/page-wunsch-übersicht.css")

      if (html.ok && css.ok) {
          html = await html.text();
          css = await css.text();
      } else {
          console.error("Fehler beim Laden des HTML/CSS-Inhalts");
          return;
      }
      let pageDom = document.createElement("div");
      pageDom.innerHTML = html;

      this._app.setPageCss(css);
      this._app.setPageContent(pageDom.querySelector("main"));
  }
}
