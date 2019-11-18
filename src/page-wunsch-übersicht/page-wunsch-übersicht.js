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

      await this._renderWunschTiles(pageDom);

      this._app.setPageCss(css);
      this._app.setPageContent(pageDom.querySelector("main"));

    }

    async _renderWunschTiles(pageDom){
        let mainElement = pageDom.querySelector("main");
        let templateElement = pageDom.querySelector("#template-tile");

        let wünsche = [];
        wünsche = await this._app.database.selectAllWuensche();
        for(var wunsch of wünsche) {
            let html = templateElement.innerHTML;
            console.log(wunsch);
            html = html.replace("{title}", wunsch.titel);
            html = html.replace("{price}", wunsch.preis);
            html = html.replace("{detail}", wunsch.beschreibung);
            console.log(html);
            mainElement.innerHTML += html;
            console.log(mainElement);
        }
      }


}
