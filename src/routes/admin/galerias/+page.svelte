<svelte:head>
  <title>Admin - Galerias</title>
</svelte:head>


<script>
  import { onMount } from "svelte";
  export let data;

  let deleteButtons;

  onMount(() => {
    deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async () => {
        const titulo = button.getAttribute("data-titulo");
        const response = await fetch("galerias", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            action: "deleteGallery",
            "data-titulo": titulo,
          }),
        });

        const data = await response.json();
        console.log(response)
        location.reload()
      });
    });
  });
</script>

<div class="subtitulo d-flex justify-content-center">
  <h1 class="subtitulo orange-texto">Galerias</h1>
</div>
<div class="justify-content-center d-flex mb-3">
  <a href="/admin/upload"
    ><button class="btn btn-outline-warning btn-lg"
      ><b>Adicionar galeria</b></button
    ></a
  >
</div>

{#if data.galerias.rows == null}
  <div class="text-center">
    <h3 class="d-inline text-bg-danger p-2 rounded">
      Não existem galerias a serem exibidas
    </h3>
  </div>
{:else}
  <div class="d-flex flex-column-reverse">
    {#each data.galerias.rows as galeria}
      <div class=" d-flex flex-column-reverse">
        <div class="d-flex justify-content-center mb-3">
          <div
            class="card border-warning galeria justify-content-center"
            style="width: 70%"
          >
            <div class="card-body">
              <h2 class="card-title orange-texto">{galeria.titulo}</h2>
              <p>
                Código de acesso: <b>{galeria.codigo}</b>
              </p>
              <p>
                Link: <b>{galeria.link}</b>
              </p>
              <button
                class="btn bg-success text-light"
                on:click={() => window.open(galeria.link, '_blank')}
                >Acessar galeria</button
              >
              <button
                class="btn btn-danger delete-button"
                data-titulo={galeria.titulo}
                on:click={() => onMount}>Apagar galeria</button
              >
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
  @import "/public/main.css";
</style>
