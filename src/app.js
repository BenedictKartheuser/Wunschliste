class App {

    constructor() {
        this.database = new Database();
    }

    run() {
        // Inhalt der ersten Seite darstellen
        let page = new PageOverview(this);
        page.show();
    }
}
