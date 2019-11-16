<nav class="navbar navbar-expand-md navbar-light " style="width: 100%">
            <a href="/" class="navbar-brand">
              <img src="https://res.cloudinary.com/dzgho0ttb/image/upload/v1572270504/readingarden_lara/rwplcaxpbymk4fhu6ktf.png" alt="readinGarden" style="width: 100%"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="/category/mortgage" class="nav-link">Mortgage</a>
                </li>
                <li class="nav-item">
                    <a href="/category/javascript" class="nav-link">Javascript</a>
                </li>
                <li class="nav-item">
                    <a href="/blog" class="nav-link">BLOG</a>
                </li>
                <li class="nav-item">
                    <a href="/blog" class="nav-link">BLOG</a>
                </li>
                <li class="nav-item">
                    <a href="/contact" class="nav-link">CONTACT US</a>
                </li>
                @if(Auth::check())
                  <li class="nav-item">
                      <a href="/me" class="nav-link">my account</a>
                  </li>
                  <li class="nav-item">
                      <a href="/post_manage" class="nav-link">post</a>
                  </li>
                  <li class="nav-item">
                      <a href="/draft" class="nav-link">draft</a>
                  </li>
                  <li class="nav-item">
                      <a href="/logout" class="nav-link">logout {{ Auth::user()->name }}</a>
                  </li>
                @endif
            </ul>
          </div>
        </nav>