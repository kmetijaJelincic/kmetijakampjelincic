class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style="background-color: #212529;">
      <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top"><img class="img-fluid" src="assets/img/logo-transparent.png" alt="" /></a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars ml-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto font-weight-bold">
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        About
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item nav-link js-scroll-trigger font-weight-bold" href="index_en.html#onas" onclick='check()'>About us</a>
                        <a class="dropdown-item nav-link js-scroll-trigger font-weight-bold" href="index_en.html#zgodba" onclick='check()'>Our story</a>
                      </div>                        
                  </li>
                  <li class="dropdown nav-item">
                      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Offer
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item nav-link js-scroll-trigger font-weight-bold" href="index_en.html#ponudba" onclick='check()'>our Offer</a>
                        <a class="dropdown-item nav-link js-scroll-trigger font-weight-bold" href="index_en.html#cenik" onclick='check()'>Price-list</a>
                      </div>                        
                  </li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="index_en.html#ekipa">Team</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="index_en.html#galerija">Gallery</a></li>
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="index_en.html#contact">Contact</a></li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        EN
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item nav-link font-weight-bold" href="galerija_ivo.html">SL</a>
                      </div>                        
                  </li>
              </ul>
          </div>
      </div>
  </nav>
      `;
    }
  }
  
customElements.define('header-component', Header);