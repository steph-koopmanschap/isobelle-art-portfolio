class Header extends HTMLElement {
    constructor() {
        super();
    }

    //When the component mounts or loads
    connectedCallback() {
        // The /*html*/ creates syntax highlighting with a plugin in vscode.
        this.innerHTML = /*html*/
        `
        <header class="pb-8">
        <div class="flex flex-wrap py-2">
        <div class="w-full px-4">
          <nav class="relative flex flex-wrap justify-between px-2 py-3 rounded">
            <div class="container px-4 mx-auto flex flex-wrap">
              <div class="w-full relative flex lg:w-auto px-2 lg:static lg:block lg:justify-center">
                <!-- LOGO -->
                <a class="text-5xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" 
                    href="../../index.html">
                  I.V.
                </a>
                <!-- LOGO -END -->
                <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
                        type="button"
                >
                  <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
              </div>
              <!-- MENU ITEMS -->
              <div class="flex lg:flex-grow items-center">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                <!-- DROPDOWN MENU -->
                  <li class="nav-item">
                    <div class="dropdown relative">
                      <button 
                        class="dropdown-toggle
                              text-2xl
                              px-3 
                              py-2 
                              flex 
                              items-center 
                              text-m 
                              uppercase 
                              font-bold 
                              leading-snug 
                              text-white hover:opacity-75
                              transition
                              duration-150
                              ease-in-out"
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
                        ></path>
                        <!-- DOWN ARROW ICON -END -->
                      </button>
                      <!-- DROPDOWN MENU ITEMS -->
                      <div class="absolute dropdown-menu bg-blue py-1  hover:visible">
                        <ul>
                          <li class="m-3 text-xl hover:bg-black text-white"><a href="../pages/social-media.html">Social Media & Ads</a></li>
                          <li class="m-3 text-xl hover:bg-black text-white"><a href="../pages/video-editing.html">Video editing</a></li>
                          <li class="m-3 text-xl hover:bg-black text-white"><a href="../pages/digital-art.html">Digital Art</a></li>
                        </ul>
                      </div>
                      <!-- DROPDOWN MENU ITEMS -END -->
                    </div>
                  </li>
                  <!-- DROPDOWN MENU -END -->
                  <li class="nav-item">
                    <a class="text-2xl px-3 py-2 flex items-center text-m uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="../pages/about.html">
                      ABOUT
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="text-2xl px-3 py-2 flex items-center text-m uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="../pages/contact.html">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
              <!-- MENU ITEMS -END -->
            </div>
          </nav>
        </div>
      </div>

      

      <hr class="ml-16 mr-16" />
      </header>
        `;
        
        // this.innerHTML = `
        // <header>
        // <!-- Logo -->
        // <a class="text-5xl" href="./index.html">I.V.</a>

        // <!-- Navbar -->
        // <nav class="navbar navbar-expand-lg flex items-center w-full justify-between">
        // <ul>
        //     <div class="">
        //     <li class=""><a href=#">ARTWORK</a>
        //         <ul class="">
        //             <li><a href="./src/pages/social-media.html">Social Media</a> </li>
        //             <li><a href="./src/pages/video-editing.html">Adobe Premiere Pro</a></li>
        //             <li><a href="./src/pages/digital-art.html">Digital & Traditional Art</a></li>
        //         </ul>
        //     </div>
        //     </li>
        //     <li><a href="./src/pages/about.html">ABOUT</a></li>
        //     <li><a href="./src/pages/contact.html">CONTACT</a></li>
        // </ul>
        // </nav>
        // <!-- Navbar End -->

        // <hr class="w-3/5" />
        // </header>
        // `;

        // //mode: 'closed' means that the shadowDOM of this component is closed to external javascript
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        // //Add the shadowroot to the element
        // shadowRoot.appendChild(headerTemplate.content);
    }
}

//Define the name of the custom html
// <header-component></header-component>
customElements.define('header-component', Header);
