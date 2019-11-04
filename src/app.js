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

        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    function openNav() {
      document.getElementById("sidenav").style.width = "250px";
      document.getElementById("app-main-area").style.marginLeft = "250px";
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.getElementById("sidenav").style.width = "0";
      document.getElementById("app-main-area").style.marginLeft = "0";
    }
}
