

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <a href="/">
        <img src="/girotop-logo.png" alt="Logo" href="/" id="logo" />
      </a>
    
    <div class="collapse navbar-collapse d-flex justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link active icon-link icon-link-hover"
            style="aria-current=page"
            href="/"><h3 class="link">Página inicial</h3></a
          >
        </li>
        <li>
          <a href="/galerias" class="nav-link active"
            ><h3 class="link">Galerias</h3></a
          >
        </li>
        <li>
          <a href="/" class="nav-link active" on:click={whatsapp}
            ><h3 class="link">Contato</h3></a
          >
        </li>
      </ul>
    </div>
    
    <div id="toggle">
      <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
</nav>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Navegar</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul class="list-group list-group-flush"> 
          <button class="list-group-item" on:click={()=>window.location.href = '/'}><p class="orange-texto">Página inicial</p></button>
          <button class="list-group-item" on:click={()=>window.location.href = '/galerias'}><p class="orange-texto">Galerias</p></button>
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
