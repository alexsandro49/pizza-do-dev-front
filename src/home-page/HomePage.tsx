import './HomePage.css'
import FormType from '../enums/FormType'
import SignInForm from '../sign-in-form/SignInForm'
import SignUpForm from '../sign-up-form/SignUpForm'

function HomePage(props: IProps) {
    return (
        <>
            <div id="container">
                <div id="color-figure"/>

                <div id="login-form">
                    <form>
                        <h1>Pizza do Dev</h1>
                        <FormSelector formType={props.formType} />
                    </form>
                </div> 
            </div> 
        </>
    )
}

function FormSelector(props: IProps) {
    if (props.formType === FormType.signIn) {
        return ( <SignInForm /> )
    } else {
        return ( <SignUpForm /> )
    }
}

interface IProps {
    formType: FormType
}
 
export default HomePage
