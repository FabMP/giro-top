<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">

      <img src="/girotop-logo.png" alt="Logo" href="/" id="logo" />
  
            <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div class="d-flex justify-content-center">
                <h3>...</h3>
              </div>      
            </button>
        
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
          <a
            class="nav-link active icon-link icon-link-hover"
            style="aria-current=page"
            href="/#quem-somos"><h3 class="link">Quem somos</h3></a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link active icon-link icon-link-hover"
            style="aria-current=page"
            href="/#diferenciais"><h3 class="link">Diferenciais</h3></a
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
              <a href="/#diferenciais" class="orange-texto">Quem somos</a>
            </div>
            </li>
          <li class="list-group-item">
            <div class="d-flex justify-content-center">
              <a href="/#diferenciais" class="orange-texto">Diferenciais</a>
            </div>
            </li>
          <li class="list-group-item">
            <div class="d-flex justify-content-center">
              <button class="orange align-middle" width="100%" style="font-size: 3vw;" on:click={whatsapp}>Contato</button>
            </div>
          </li>       
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
