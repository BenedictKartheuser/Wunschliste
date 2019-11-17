class WunschHinzufügen {
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

        this._app.setPageCss(css);
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    var slider = document.getElementById("wochen");
    var output = document.getElementById("wochenanzahl");
    output.innerHTML = slider.value;

    var hinzufügen = document.getElementById("hinzufügen");
    hinzufügen.disabled = false;

    var wunschtitel = document.getElementById("wunschtitel");
    var wunschbeschreibung = document.getElementById("wunschbeschreibung");
    var preis = document.getElementById("preis");
    var wichtig = document.getElementById("wichtig");


    slider.oninput = function() {
      output.innerHTML = this.value;
    }

    function checkButtonStatus() {
    alert('here');
    	if(wunschtitel.textContent != "" && preis.textContent != "") {
      	hinzufügen.disabled = false;
      }
    }

    function inputZurücksetzen() {
    		alert('Enabled!');
        wunschtitel.innerHTML="";
        wunschbeschreibung.innerHTML="";
        wochen.value = 10;
        preis.innerHTML="";
        wichtig.checked = false;
    }
}
