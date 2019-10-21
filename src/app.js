class App {

    //// Funktioniert so nicht in JavaScript!
    // database = new Database();
    // halloString = "Hallo, Welt!";

    constructor() {
        this.database = new Database();
    }

    run() {
        // Menü bei Klick auf den Hamburger ein- und ausblenden
        let menuIcon = document.querySelector("header nav .toggle-menu a");
        menuIcon.addEventListener("click", this.toggleHambugerMenu);

        // Inhalt der ersten Seite darstellen
        let page = new PageOverview(this);
        page.show();
    }

    toggleHambugerMenu() {
        let menu = document.querySelector("header nav .menu-right");

        if (menu.classList.contains("small-screen-hidden")) {
            // Menü war unsichtbar, deshalb jetzt anzeigen
            menu.classList.remove("small-screen-hidden");
        } else {
            // Menü war sichtbar, deshalb jetzt ausblenden
            menu.classList.add("small-screen-hidden");
        }
    }
}
