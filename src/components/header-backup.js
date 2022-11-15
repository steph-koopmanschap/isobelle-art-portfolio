const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
    header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        color: white;
    }

    a {
        text-decoration: none;
        font-size: 1.5rem;
        color: white;
    }

    a:hover {
        border-bottom: 1px solid black;
        
    }

    ul {
        list-style-type: none;
        display: inline-flex;
    }

    li {
        margin: 10px;
    }

    .sub-menu-parent-item ul li{
        margin-left: 0px;
    }

    .IV-logo {
        margin: 1%;
        font-size: 3rem;
    }

    .main-menu {
        
    }

    .sub-menu-artwork-parent ul {
        display: none;
    }

    .sub-menu-artwork-parent:hover ul {
        display: block;
    }
</style>

<header>
<a class="IV-logo" href="./index.html">I.V.</a>

<nav class="main-menu">
  <ul>
    <div class="sub-menu-artwork-parent">
    <li class="sub-menu-parent-item"><a href=#">ARTWORK</a>
        <ul class="sub-menu-artwork">
            <li><a href="../pages/social-media.html">Social Media</a> </li>
            <li><a href="../pages/video-editing.html">Adobe Premiere Pro</a></li>
            <li><a href="../pages/digital-art.html">Digital & Traditional Art</a></li>
        </ul>
    </div>
    </li>
    <li><a href="../pages/about.html">ABOUT</a></li>
    <li><a href="../pages/contact.html">CONTACT</a></li>
  </ul>
</nav>

<hr />
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }
    //When the component mounts or loads
    connectedCallback() {
        //mode: 'closed' means that the shadowDOM of this component is closed to external javascript
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        //Add the shadowroot to the element
        shadowRoot.appendChild(headerTemplate.content);
    }
}

//Define the name of the custom html
// <header-component></header-component>
customElements.define('header-component', Header);
