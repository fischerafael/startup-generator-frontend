import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';

import registration from '../../assets/registration.png'

import './style.css';

export default function ContactInfo() {

    const history = useHistory();

    function goBack() {
        history.push('/profile');
    }

    function handleRegistration() {

        history.push('/profile');
    }

    return (
        <>
            <Header />
            <div className="contact-container">
                <div className="contact-content">
                    <div>
                        <img className="registration-img" src={registration} alt=""/>
                    </div> 
                    <div className="contact-form">
                        <form>
                            <h2>Alterar</h2>
                            <div className="main-info">
                                <input type="text" placeholder="Nome"/>
                                <input type="text" placeholder="Cidade"/>
                                <input type="text" placeholder="Estado"/>
                            </div>                            
                            <div className="extra-info">
                                <input type="text" placeholder="Whatsapp"/>
                                <input type="text" placeholder="Instagram"/>
                                <input type="text" placeholder="Facebook"/>
                            </div>                            
                            <button className="close-btn" onClick={goBack}>x</button>
                        </form>
                        <div className="contact-btn">                            
                            <button className="button" onClick={handleRegistration}>CADASTRAR-SE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}