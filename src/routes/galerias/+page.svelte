<svelte:head>
  <title>Galerias</title>
</svelte:head>


<script>
  export let data;
  let codigoInput = "";
</script>

<div class="subtitulo d-flex justify-content-center">
  <h1 class="subtitulo">Galerias</h1>
</div>
<div class="d-flex justify-content-center">
  <p>
    Insira o código da galeria que você recebeu da Giro Top 360º para ver as
    imagens.
  </p>
</div>
s
{#if data.galerias == null }
  <div class="text-center">
    <h3 class="d-inline text-bg-danger p-2 rounded">
      Não existem galerias a serem exibidas
    </h3>
  </div>
{:else}
  <div class="d-flex flex-column-reverse">
    {#each data.galerias as galeria}
      <div class="d-flex flex-column-reverse">
        <div class="d-flex justify-content-center mb-3">
          <div
            class="card border-warning galeria justify-content-center"
            style="width: 60%"
          >
            <div class="card-body text-center">
                  <div class="d-flex align-items-center">
                <div class="col-8">
                  <form on:submit|preventDefault style="width: 50%;">
                    <div class="p-1">
                      <h2 class="card-title orange-texto">{galeria.titulo}</h2>

                      <input
                        type="text"
                        class="form-control"
                        id="codigo"
                        name="codigo"
                        placeholder="Insira o código fornecido"
                        bind:value={codigoInput}
                      />
                    </div>

                    <div class="p-1">
                      <button
                        id="botao"
                        style="color: white;"
                        class="btn form-control orange"
                        type="submit"
                        on:click={(event) => {
                          event.preventDefault();
                          if (galeria.codigo == codigoInput) {
                            window.location.href = galeria.link;
                          }
                        }}
                      >
                        Acessar galeria
                      </button>
                    </div>
                  </form>
                </div>
              </div>
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
