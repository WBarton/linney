module.exports = (components, pConf) => `
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pConf.name} | Linney</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
      integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA=="
      crossorigin="anonymous" />
  </head>
  <body class="${pConf.class || ''}">
    <div class="site-wrapper" style="position: relative;">

      <header>
        <div class="container-max-width">
          <div class="container-wide">
            <nav class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand" href="/">
                <img src="/assets/logo.png" alt="Linney">
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      CAPABILITIES
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      THOUGHTS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      VALUES
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      CAREERS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      CONTACT
                    </a>
                  </li>
                  
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div class="container-max-width">
          ${components
            .map(c => `${c.component}`)
            .join('')}
        </div>
      </main>

      <footer class="el-footer">
      <div class="container-max-width">
        <div class="el-footer-cta">
          <div class="container">
            <span>
              If you’re curious, we’d love to talk
            </span>
          </div>
        </div>
        <div class="el-sign-off text-right">
          <div class="container">
            Restless since 1851
          </div>
        </div>
        <div class="el-footer-nav">
          <div class="container-wide">
            <nav class="navbar navbar-expand-lg navbar-dark align-items-start">
              <a class="navbar-brand" href="/">
                <img src="/assets/logo.png" alt="Linney">
              </a>
              <div class="text-center text-md-right social-links mb-2 mb-md-0">
                <a href="#" target="_blank" rel="noreferrer"
                  class="link-linkedin">
                  <span class="sr-only">Find us on Linkedin</span>
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                  class="ml-3 link-twitter">
                  <span class="sr-only">Find us on Twitter</span>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                  class="ml-3 link-instagram">
                  <span class="sr-only">Find us on Instagram</span>
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                  class="ml-3 link-facebook">
                  <span class="sr-only">Find us on Facebook</span>
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="/privacy" class="nav-link">
                    Privacy
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/cookies" class="nav-link">
                    Cookies
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Terms and conditions
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/accessibility" class="nav-link">
                    Accessibility
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/modern-slavery-policy" class="nav-link">
                    Modern slavery policy
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/linney-gender-pay-gap-report" class="nav-link">
                    Gender pay gap
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"></script>
  </body>
</html>
`;
