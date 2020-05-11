import React from 'react';
import Header from '../../components/header';

import './style.css';

import whatsapp from '../../assets/whatsapp-grey.svg';
import site from '../../assets/site-grey.svg';
import instagram from '../../assets/instagram-grey.svg';
import facebook from '../../assets/facebook-grey.svg';

export default function Search() {
    return (
        <>
            <Header />
            <div className="search-container">
                <div className="search-content">
                    <div className="search-form">
                        <form>
                            <input type="text" placeholder="Pesquisar"/>                            
                        </form>
                    </div>
                    <div className="search-results">
                        <ul>
                            <li>
                                <div className="search-card">
                                    <h2>STARTUP GENERATOR</h2>
                                    <h3>Curitiba, Paraná</h3>
                                    <button className="plus-btn">+</button>
                                    <div className="search-contact">
                                        <div className="search-item">
                                            <img src={whatsapp} alt=""/>
                                            <h3>55 41 9 9696 9696</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={site} alt=""/>
                                            <h3>www.startupgenerator.com</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={instagram} alt=""/>
                                            <h3>@startupgenerator</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={facebook} alt=""/>
                                            <h3>/StartupGenerator</h3>
                                        </div>
                                    </div>
                                </div>                                                                
                            </li>

                            <li>
                                <div className="search-card">
                                    <h2>STARTUP GENERATOR</h2>
                                    <h3>Curitiba, Paraná</h3>
                                    <button className="plus-btn">+</button>
                                    <div className="search-contact">
                                        <div className="search-item">
                                            <img src={whatsapp} alt=""/>
                                            <h3>55 41 9 9696 9696</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={site} alt=""/>
                                            <h3>www.startupgenerator.com</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={instagram} alt=""/>
                                            <h3>@startupgenerator</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={facebook} alt=""/>
                                            <h3>/StartupGenerator</h3>
                                        </div>
                                    </div>
                                </div>                                                                
                            </li>

                            <li>
                                <div className="search-card">
                                    <h2>STARTUP GENERATOR</h2>
                                    <h3>Curitiba, Paraná</h3>
                                    <button className="plus-btn">+</button>
                                    <div className="search-contact">
                                        <div className="search-item">
                                            <img src={whatsapp} alt=""/>
                                            <h3>55 41 9 9696 9696</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={site} alt=""/>
                                            <h3>www.startupgenerator.com</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={instagram} alt=""/>
                                            <h3>@startupgenerator</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={facebook} alt=""/>
                                            <h3>/StartupGenerator</h3>
                                        </div>
                                    </div>
                                </div>                                                                
                            </li>

                            <li>
                                <div className="search-card">
                                    <h2>STARTUP GENERATOR</h2>
                                    <h3>Curitiba, Paraná</h3>
                                    <button className="plus-btn">+</button>
                                    <div className="search-contact">
                                        <div className="search-item">
                                            <img src={whatsapp} alt=""/>
                                            <h3>55 41 9 9696 9696</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={site} alt=""/>
                                            <h3>www.startupgenerator.com</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={instagram} alt=""/>
                                            <h3>@startupgenerator</h3>
                                        </div>
                                        <div className="search-item">
                                            <img src={facebook} alt=""/>
                                            <h3>/StartupGenerator</h3>
                                        </div>
                                    </div>
                                </div>                                                                
                            </li>
                        </ul>
                    </div> 
                                       
                </div>
                
            </div>
        </>
    );
}