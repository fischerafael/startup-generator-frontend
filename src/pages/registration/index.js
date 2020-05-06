import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';

import './style.css';
import registration from '../../assets/registration.png'

export default function Registration() {     

    const history = useHistory()

    function goBack() {
        history.push('/login');
    }


    return (
        <>
            <Header />
            <div className="registration-container">
                <div className="registration-content">
                    <div>
                        <img className="registration-img" src={registration} alt=""/>
                    </div>
                    <div className="registration-form">
                        <form>
                            <h2>Cadastro</h2>
                            <div className="main-info">
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Senha"/>
                            </div>                            
                            <div className="extra-info">
                                <input type="text" placeholder="Startup"/>
                                <input type="text" placeholder="Cidade"/>
                                <input type="text" placeholder="Estado"/>
                            </div>                            
                            <button className="close-btn" onClick={goBack}>x</button>
                        </form>
                        <div className="registration-btn">                            
                            <button className="button">CADASTRAR-SE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}