"use strict";

/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class PageOverview {
    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
    async show() {
        // Anzuzeigenden Seiteninhalt nachladen
        let html = await fetch("page-overview/page-overview.html");
        let css = await fetch("page-overview/page-overview.css");

        if (html.ok && css.ok) {
            html = await html.text();
            css = await css.text();
        } else {
            console.error("Fehler beim Laden des HTML/CSS-Inhalts");
            return;
        }

        // Seite zur Anzeige bringen
        let pageDom = document.createElement("div");
        pageDom.innerHTML = html;

        this._renderBoatTiles(pageDom);

        this._app.setPageTitle("Startseite");
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    onTestButtonClicked() {
        alert("Test bestanden. Schönen Feierabend!");
    }
    _renderBoatTiles(pageDom) {
        let mainElement = pageDom.querySelector("main");
        let templateElement = pageDom.querySelector("#template-tile");

        this._app.database.getAllRecords().forEach(boat => {
            let html = templateElement.innerHTML;
            html = html.replace("{HREF}", `#/Detail/${boat.id}`);
            html = html.replace("{IMG}", boat.img);
            html = html.replace("{NAME}", boat.name);

            mainElement.innerHTML += html;
        });
    }
    getItems() {
        //daten aus der Datenbank bekommen
        db.collection('Wünsche').get().then((snapshot) => {
            snapshot.docs.forEach(doc =>{
                console.log(doc.data())
            })
        })
    }
}
