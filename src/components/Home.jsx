import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import BtnWhatsapp from "./BtnWhatsapp";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        fbq('track', 'Contact');
    };

    return (
        <div className="background">
            <div className="linhaFundo">
                <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
                    <div className="md:w-2/4 text-center">
                        <h1 className="text-5xl font-semibold leading-tight text-left">
                            Gerencie seus projetos com <span className="text-sky-400">eficiência</span> e <span className="text-sky-400">agilidade</span>.
                        </h1>
                        <p className="mt-5 text-start text-2xl">
                            Transforme a gestão do seu time com nosso software especializado em <span className="font-semibold">Scrum e Kanban</span>. Crie projetos, tarefas, listas de verificação e acompanhe tudo em um só lugar. <br />
                            <span className="font-semibold">Simplicidade, organização e resultados para sua equipe!</span>
                        </p>
                        <p className="mt-5 text-sky-400 text-xl">
                            Comece agora por apenas R$ 17,90/mês. Sem complicações!
                        </p>
                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/5562993398590?text=Oi%2C+quero+saber+mais+sobre+o+software+de+gest%C3%A3o+de+projetos."
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                target="_blank"
                                onClick={handleClick}
                            >
                                Fale com um especialista agora!
                            </a>
                            <button
                                onClick={() => navigate('/cadastro')}
                                className="bg-[#0B1D41] hover:bg-[#1a2d5c] text-white font-bold py-2 px-4 rounded transition-all duration-300"
                            >
                                Criar Conta
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <img src="./img/imagem-home.png" alt="Software de Gestão de Projetos" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;