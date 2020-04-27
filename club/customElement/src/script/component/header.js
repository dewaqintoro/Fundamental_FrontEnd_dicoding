class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `<div class="container">
        <h1>Pencarian Lirik</h1>
        <form action="" id="form" autocomplete="off">
          <input type="text" id="search" placeholder="Ketik Judul">
          <button>Cari</button>
        </form>
      </div>`;
    }
}

customElements.define("app-bar", AppBar);