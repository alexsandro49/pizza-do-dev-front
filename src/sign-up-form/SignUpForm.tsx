import './SignUpForm.css'

function SignUpForm() {
    return (
        <>
            <form>
                <h2>Crie a sua conta</h2>
                <input type="text" name="name" placeholder="Nome"/>
                <input type="number" name="cpf" placeholder="CPF (apenas o número)"/>
                <input type="number" name="dob" placeholder="Data de Nascimento"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Senha"/>
                <input type="number" name="cellphone" placeholder="Celular (apenas o número)"/>
                <div id="checkbox">
                    <input type="checkbox" name="whatsapp" />
                    <label for="whatsapp">Whatsapp?</label>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}
 
export default SignUpForm
