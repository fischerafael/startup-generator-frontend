import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';

import './style.css';
import login from '../../assets/login.png'

export default function Login() {   

    const history = useHistory()

    function goBack() {
        history.push('');
    }

    function toRegistration() {
        history.push('/registration');
    }

    return (
        <>
            <Header />
            <div className="login-container">
                <div className="login-content">
                    <div>
                        <img className="login-img" src={login} alt=""/>
                    </div>
                    <div className="login-form">
                        <form>
                            <h2>Login</h2>
                            <div className="main-info">
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Senha"/>
                            </div>                            
                            <button className="close-btn" onClick={goBack}>x</button>
                        </form>
                        <div className="login-btn">
                            <button className="button">ENTRAR</button>
                            <button className="button" onClick={toRegistration}>CADASTRAR-SE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}