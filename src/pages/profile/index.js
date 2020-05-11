import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './style-profile.css';
import './style-newitem.css';

import whatsapp from '../../assets/whatsapp.svg';
import site from '../../assets/site.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import editar from '../../assets/editar.svg';

export default function Profile() {

    const [displayNewItem, setDisplayNewItem] = useState('none');
    const [blur, setBlur] = useState('');
    const [type, setType] = useState('');

    // redirect user
    const history = useHistory();
    // logs out user
    function logoutHandler() {
        localStorage.clear();
        history.push('/');
    }

    // handling contact registration
    function contactRegistrationHandler() {
        history.push('/contactinfo');
    }

    // handling newitem
    function openNewItemProblema() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('problema')
    }

    function openNewItemSolucao() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('solucao')
    }

    function openNewItemProposta() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('proposta')
    }

    function openNewItemVantagem() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('vantagem')
    }

    function openNewItemSegmento() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('segmento')
    }

    function openNewItemMetricas() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('metricas')
    }

    function openNewItemCanais() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('canais')
    }

    function openNewItemCustos() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('custos')
    }

    function openNewItemReceitas() {
        setDisplayNewItem('');
        setBlur('blur(3px)');
        setType('receitas')
    }

    function closeNewItem() {
        setDisplayNewItem('none');
        setBlur('');
        setType('');
    }

    return (
        <>
            <div className="profile-container" style={{filter: `${blur}`}}>
                <div className="info-container">
                    <div className="info-container-content">                        
                        <div className="info-name">
                            <h2>Startup Generator</h2>
                            <button onClick={contactRegistrationHandler}>
                                <img src={editar}/>
                            </button>                         
                        </div>    
                        <p>Curitiba, Paraná</p>                
                    </div>
                    <div className="info-contact">
                        <img src={whatsapp}/>
                        <p>41 5555 5555</p> 
                        <img src={site}/>
                        <p>www.startupgenerator.com</p>                       
                    </div>
                    <div className="info-contact">
                        <img src={facebook}/>
                        <p>/StartupGenerator</p> 
                        <img src={instagram}/>
                        <p>@startupgenerator</p>                       
                    </div> 
                    <button className="close-btn" onClick={logoutHandler}>X</button>                                                                   
                </div>



                <div className="canvas-container">
                    <div className="problema card">
                        <h3>Problema</h3>
                        <button className="add-btn" onClick={openNewItemProblema}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="solucao card">
                        <h3>Solução</h3>
                        <button className="add-btn" onClick={openNewItemSolucao}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>                                
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>                                
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                    <div className="proposta-de-valor card">
                        <h3>Proposta de Valor</h3>
                        <button className="add-btn" onClick={openNewItemProposta}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="vantagem card">
                        <h3>Vantagem Competitiva</h3>
                        <button className="add-btn" onClick={openNewItemVantagem}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="segmento card">
                        <h3>Cliente</h3>
                        <button className="add-btn" onClick={openNewItemSegmento}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="metricas card">
                        <h3>Métricas</h3>
                        <button className="add-btn" onClick={openNewItemMetricas}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="canais card">
                        <h3>Canais</h3>
                        <button className="add-btn" onClick={openNewItemCanais}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="custos card">
                        <h3>Custos</h3>
                        <button className="add-btn" onClick={openNewItemCustos}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="receitas card">
                        <h3>Receitas</h3>
                        <button className="add-btn" onClick={openNewItemReceitas}>+</button>
                        <div className="list">
                            <ul>
                                <li>
                                    <p>Pretação de serviçosasfadsf sd fsadfas df  fsdafasdf</p>                                    
                                    <button className="del-item">x</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newitem-container" style={{display: `${displayNewItem}`}}>
                <div className="newitem-content">
                    <form>
                        <input type="text" placeholder="Novo item"/>
                        <button className="button">ADICIONAR</button>
                    </form>
                    <button className="close-btn" onClick={closeNewItem}>X</button>
                </div>
            </div>
        </>
    );
}