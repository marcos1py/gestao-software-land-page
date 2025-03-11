import React from "react";

const Sobre = () => {
    const handleClick = () => {
        fbq('track', 'Contact');
    };

    return (
        <div className="mt-1 mb-20 flex flex-col-reverse md:flex-row items-center gap-5 ">
            <div className="w-full md:w-2/4">
                <img src="./img/BannerSobre.png" alt="Software de Gestão de Projetos" />
            </div>
            <div className="w-full md:w-3/4 text-center space-y-11 m-10 p-10">
                <h3 className="text-4xl font-semibold ">
                    <span className="text-blue-500 mb-10">Sobre o Software</span>
                </h3>

                <p className="text-left text-2xl">
                    Nosso software de <span className="text-sky-400 font-semibold">gestão de projetos</span> foi desenvolvido para transformar a forma como equipes gerenciam tarefas e alcançam resultados. Com funcionalidades como <span className="text-sky-400 font-semibold">Scrum, Kanban, checklists e criação de tarefas personalizadas</span>, oferecemos uma solução completa para otimizar a produtividade. <br /><br />

                    Estamos há anos no mercado, entregando soluções que combinam <span className="text-sky-400 font-semibold">eficiência, personalização e suporte dedicado</span>. Nosso compromisso é garantir que cada cliente tenha a melhor experiência, com um sistema fácil de usar e adaptado às suas necessidades. <br /><br />

                    Com nossa plataforma, você terá controle total dos seus projetos e uma visão clara de cada etapa do processo. Aqui, o trabalho só termina quando sua equipe alcança o sucesso.
                </p>

                <div className="mt-5">
                    <a
                        href="https://wa.me/5562993398590?text=Oii%2C+quero+saber+mais+sobre+o+software+de+gest%C3%A3o+de+projetos."
                        className="bg-blue-600 hover:bg-blue-700 m-3 mt-9 text-white font-bold py-2 px-4 rounded"
                        target="_blank"
                        onClick={handleClick}
                    >
                        Saiba como otimizar seus projetos!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
