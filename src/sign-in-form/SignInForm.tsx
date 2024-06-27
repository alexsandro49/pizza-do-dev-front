import './SignInForm.css'

function SignInForm() {
    return (
        <>
            <form>
                <h2>Acesse a sua conta</h2>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Senha"/>
                <a>Esqueci a minha senha</a>
                <button type="submit">Entrar</button>
                <p>Ainda não criou sua conta? <a><strong>Cadastre-se</strong></a></p>
            </form>
        </>
    )
}
 
export default SignInForm
