class WunschHinzufuegen {
    constructor(app) {
        this._app = app;
    }

    async show() {
        let html = await fetch("page-wunsch-hinzufügen/page-wunsch-hinzufügen.html")
        let css = await fetch("page-wunsch-hinzufügen/page-wunsch-hinzufügen.css")

        if (html.ok && css.ok) {
            html = await html.text();
            css = await css.text();
        } else {
            console.error("Fehler beim Laden des HTML/CSS-Inhalts");
            return;
        }
        let pageDom = document.createElement("div");
        pageDom.innerHTML = html;

        var slider = pageDom.querySelector("#wochen");
        var output = pageDom.querySelector("#wochenanzahl");
        output.innerHTML = slider.value;

        slider.oninput = () => {
          output.innerHTML = slider.value;
        };

        var hinzufügen = pageDom.querySelector("#hinzufügen");
        hinzufügen.disabled = true;

        var wunschtitel = pageDom.querySelector("#wunschtitel");
        var wunschbeschreibung = pageDom.querySelector("#wunschbeschreibung");
        var preis = pageDom.querySelector("#preis");
        var wichtig = pageDom.querySelector("#wichtig");

        wunschtitel.onchange = () => {
            this.checkButtonStatus();
        };

        preis.onchange = () => {
            this.checkButtonStatus();
        };

        hinzufügen.onclick = () => {
            wunschtitel.value="";
            wunschbeschreibung.value="";
            slider.value = 10;
            output.innerHTML = slider.value;
            preis.value="";
            wichtig.checked = false;
        };

        this._app.setPageCss(css);
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    checkButtonStatus() {
        hinzufügen.disabled = (preis.value == "0" || wunschtitel.value == "");
    }
}
