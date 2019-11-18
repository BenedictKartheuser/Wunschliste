class History {
    constructor(app) {
        this._app = app;
    }

    async show() {
        let html = await fetch("page-history/page-history.html")
        let css = await fetch("page-history/page-history.css")

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
