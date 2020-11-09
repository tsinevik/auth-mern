import React from "react";
import useForm from '../hooks/useForm';
import axios from "axios";

const SignForm = () => {
    const USER_API = 'http://localhost:4000/user';
    const { form, updateForm } = useForm({ email: '', password: '' });

    const handleRegistration = e => {
        e.preventDefault();

        axios.post(`${USER_API}/signup`, form)
            .then( response => {
                console.log('Вы успешно зарегистрировались!');
            })
            .catch( error => {
                console.log(error.response.data);
            });
    }

    const handleLogin = e => {
        e.preventDefault();

        axios.post(`${USER_API}/login`, form)
            .then( response => {
                console.log('УРА! Вы успешно залогинились!', response);
            })
            .catch( error => {
                console.log(error.response.data);
            });
    }

    return (
        <form>
            <div>
                <input type="email" placeholder={'email'} onChange={e => updateForm('email', e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder={'password'} onChange={e => updateForm('password', e.target.value)}/>
            </div>
            <button onClick={handleLogin}>Войти</button>
            <button onClick={handleRegistration}>Регистрация</button>
        </form>
    );
};

export default SignForm;
