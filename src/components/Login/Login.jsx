import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../api/utils/validators/validators';
import { Input } from '../common/FormsControl/FormsControl';
import { login } from '../redux/auth-reducer';
import style from '../common/FormsControl/FormsControl.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'Email'} component={Input} type={"text"}
                    validate={[required]} />
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component={Input} type={"text"}
                    validate={[required]} />
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={"checkbox"} /> remember me
            </div>
            {
                props.error && <div className={style.formSumaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)