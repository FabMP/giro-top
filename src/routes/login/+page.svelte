<style>
    @import '/public/main.css';

    form{
        margin-top: 2%;
    }
</style>

<div class="d-flex justify-content-center">
    <form method="POST" class="text-dark">
        <div>
            <h3>Login do admin</h3>
            <input type="text" name="nome" class="form-control-lg" id="nome" required /> 
        </div> <br>

        <div>
            <h3 for="input">Senha</h3>
        <input type="password" name="password" class="form-control-lg" id="password" required /> 
        </div> <br>

        <div>
            <button class="btn form-control-lg orange" type="submit" id="botao">Entrar</button>
        </div>
        
    </form>
</div>