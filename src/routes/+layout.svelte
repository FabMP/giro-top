<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <a href="/">
        <img src="/girotop-logo.png" alt="Logo" href="/" id="logo" />
      </a>
    
      <div id="toggle">
        <span class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <span class="navbar-toggler-icon"></span>
        </span>
      </div>

    <div class="collapse navbar-collapse d-flex justify-content-end">
      <div class="esconde">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link active icon-link icon-link-hover"
            style="aria-current=page"
            href="/"><h3 class="link">Home</h3></a
          >
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link active" on:click={whatsapp}
            ><h3 class="link">Contato</h3></a
          >
        </li>
      </ul>
      </div>
    </div>
    
    
  </div>
</nav>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Navegar</h1>
        <span type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></span>
      </div>
      <div class="modal-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
          <div class="d-flex justify-content-center">
            <a href="/" class="orange-texto">Home</a>
          </div>
          </li>
          <li class="list-group-item">
            <div class="d-flex justify-content-center">
              <a href="/#diferenciais" class="orange-texto">Diferenciais</a>
            </div>
            </li>  
          <button class="list-group-item" on:click={whatsapp}><p class="orange-texto">Contato</p></button>
        </ul>
      </div>
    </div>
  </div>
</div>

<script>
  export function whatsapp(){
      window.open("https://api.whatsapp.com/send?phone=5584999525134", "blank_")
  }
</script>

<slot />
