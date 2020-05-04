import React from 'react';
import Header from '../../components/header';

import './style.css';
import heroImg from '../../assets/hero-img.png'

export default function Home() {   
    return (
        <>
            <Header />
            <div className="home-container">
                <div className="home-content">
                    <div className="home-img">
                        <img className="hero-img" src={heroImg} alt=""/>
                    </div>
                    <div className="home-cta">
                        <h1>IDEALIZE, VISUALIZE E VALIDE</h1>
                        <h2>Faça o modelo canvas de negócio de sua startup de maneira online.</h2>
                        <h2>Veja modelos de negócio de outras startups.</h2>
                        <h2>Encontre uma startup para investir</h2>
                        <div className="home-btn">
                            <button>CRIAR STARTUP</button>
                            <button>ENCONTRAR STARTUP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}