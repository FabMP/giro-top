<svelte:head>
  <title>Admin - Upload</title>
</svelte:head>


<style>
    @import '/public/main.css';
    
    div{
        padding: 1%;
        margin: 0.1%;
    }
</style>

<div class="text-light text-center">
    <h1 class="subtitulo">Upload</h1>
        <a href="/admin/galerias" class="text-light">
        <button class="btn btn-outline-warning btn-lg"><b>Ver galerias</b></button>
        </a>
</div>


<div class="d-flex justify-content-center">

<form method="post" action="/admin/upload" enctype="multipart/form-data" class="p-2 rounded" style="width: 40%;">

    <div class="justify-content-center d-flex mb-3">
        <input type="text" name="titulo" id="titulo" class="form-control-lg form-control" placeholder="Título da festa" required >
    </div>

    <div>
        <input type="url" class="form-control form-control-lg mb-3 url" id="link" name="link" placeholder="Link da galeria" required/>
    </div>


    <div class="justify-content-center d-flex mb-3">
        <input type="text" class="form-control-lg form-control"  name="codigo" id="codigo" placeholder="Código da galeria" required >
    </div>

    <div class="d-flex justify-content-center block">
        <button type="submit" class="btn btn-lg form-control-lg text-light orange" id="botao">Enviar</button>
    </div>

</form>

</div>

