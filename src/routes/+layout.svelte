<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <a href="/">
        <img src="/girotop-logo.png" alt="Logo" href="/" id="logo" />
      </a>
    
    <div class="collapse navbar-collapse d-flex justify-content-end">
      <ul class="navbar-nav esconde">
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
    
    <div id="toggle">
      <span class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span class="navbar-toggler-icon"></span>
      </span>
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
          <a class="orange-texto list-group-item botaomenu"  href="/">Home</a>
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

  const tela = document.querySelector()

</script>

<slot />
