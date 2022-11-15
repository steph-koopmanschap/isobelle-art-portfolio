class Header extends HTMLElement {
    constructor() {
        super();
    }

    //When the component mounts or loads
    connectedCallback() {
        // The /*html*/ comment creates syntax highlighting with a plugin in vscode.
        this.innerHTML = /*html*/
        `
        <header class="pb-20 pt-8">
          <div class="flex flex-col w-full items-center justify-center">
            <!-- LOGO -->
            <a
              class="text-6xl mb-6
              "
              href="/index.html"
            >
            I.V.
            </a>
            <!-- LOGO -END -->
            <!-- MAIN MENU -->
            <nav>
              <div class="m-4">
                <ul class="inline-flex items-center justify-center">
                  <!-- DROPDOWN MENU -->
                  <li class="dropdown-menu-head">
                    <button 
                      class="flex mx-4 text-2xl hover:text-indigo-600" 
                      href="/index.html"
                    >
                    ARTWORK
                    <!-- DOWN ARROW ICON -->
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    class="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  >
                  </path>
                  <!-- DOWN ARROW ICON -END -->
                  </button>
                  <!-- DROPDOWN MENU ITEMS -->
                  <div class="dropdown-menu absolute">
                    <ul>
                      <li>
                        <a
                          class="m3 text-xl hover:bg-black text-white"
                          href="/index.html"
                        >
                        Ads & Social Media
                        </a>
                      </li>
                      <li>
                        <a
                          class="m3 text-xl hover:bg-black text-white"
                          href="http://127.0.0.1:5500/src/pages/video-editing.html"
                        >
                        Video editing
                        </a>
                    </li>
                    <li>
                      <a
                        class="m3 text-xl hover:bg-black text-white"
                        href="http://127.0.0.1:5500/src/pages/digital-art.html"
                      >
                      Digital Art
                      </a>
                    </li>
                    </ul>
                  </div>
                  <!-- DROPDOWN MENU ITEMS -END -->
                  </li>
                  <!-- DROPDOWN MENU -END -->
                  <li>
                    <a
                      class="mx-4 text-2xl hover:text-indigo-600"  
                      href="http://127.0.0.1:5500/src/pages/about.html"
                    >ABOUT
                    </a>
                  </li>
                  <li>
                  <a  
                  class="mx-4 text-2xl hover:text-indigo-600"
                    href="http://127.0.0.1:5500/src/pages/contact.html"
                  >CONTACT
                  </a>
                </li>
                </ul>
              </div>
            </nav>
            <!-- MAIN MENU -END -->
          </div>
        </header>
        `
      

      
        // //mode: 'closed' means that the shadowDOM of this component is closed to external javascript
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        // //Add the shadowroot to the element
        // shadowRoot.appendChild(headerTemplate.content);
    }
}

//Define the name of the custom html
// <header-component></header-component>
customElements.define('header-component', Header);
