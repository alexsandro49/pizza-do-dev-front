import './HomePage.css'

function HomePage() {
    return (
        <>
            <div id="container">
                <div id="color-figure"/>

                <div id="login-form">
                    <form>
                        <h1>Pizza do Dev</h1>
                        <h2>Acesse a sua conta</h2>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Senha"/>
                        <a>Esqueci a minha senha</a>
                        <button type="submit">Entrar</button>
                        <p>Ainda não criou sua conta? <a><strong>Cadastre-se</strong></a></p>
                    </form>
                </div> 
            </div> 
        </>
    )
}
 
export default HomePage
