class Footer extends HTMLElement {
    constructor() {
        super();
    }
    //When the component mounts or loads
    connectedCallback() {

        const currentYear = new Date().getFullYear();

        // The /*html*/ comment creates syntax highlighting with a plugin in vscode.
        this.innerHTML = /*html*/
        `
        <footer class="m-8">
        <hr class="ml-16 mr-16" />
        <p class="pt-8 ml-20 text-center">© ${currentYear} BY ISOBELLE VILLABLANCA</p>
        </footer>
        `;
    }
}

//Define the name of the custom html
// <footer-component></footer-component>
customElements.define('footer-component', Footer);
