// import
class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    } 

    render() {
        this.innerHTML = `
        <div class="container container1">
        <h1>Pencarian Lirik Lagu</h1>
          <div class="row justify-content-center">
                                <div class="col-12 col-md-10 col-lg-8">
                                    <form class="card card-sm" id="form">
                                        <div class="card-body row no-gutters align-items-center">
                                            <!--end of col-->
                                            <div class="col">
                                                <input id="inputCari" class="form-control form-control-lg form-control-borderless" type="search" placeholder="cari lagu">
                                            </div>
                                            <!--end of col-->
                                            <div class="col-auto">
                                                <button class="btn btn-lg btn-secondary btn-cari" type="submit">Cari</button>
                                            </div>
                                            <!--end of col-->
                                        </div>
                                    </form>
                                </div>
                                <!--end of col-->
                            </div>
        </div>
        `;
    }
}

customElements.define("ndas-1", AppBar);