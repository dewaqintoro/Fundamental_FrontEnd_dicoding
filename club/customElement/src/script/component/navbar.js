function navbar() {
  document.getElementById("navbar1").innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="index.html">DewLyrics</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="index.html">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="src/page/about.html">Features</a>
    </div>
  </div>
</nav>`;
}

navbar()

