import React from "react";
import { Link } from "react-scroll";

const Beneficios = () => {
    const handleClick = () => {
        fbq('track', 'Contact');
    };

    return (
        <div>
            <section className="your-work-area">
                <div className="">
                    <div className="theme-text text-center mb-10">
                        <h3 className="text-4xl font-semibold text-blue-600">
                        Como nosso software impulsiona seus projetos?
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
                        {/* Benefício 1 */}
                        <div className="singel-pricing p-8">
                            <h4>Gestão Ágil com Scrum e Kanban</h4>
                            <p>
                                Gerencie seus projetos de forma eficiente utilizando as melhores práticas de Scrum e Kanban. Visualize o progresso, organize tarefas e melhore a produtividade.
                            </p>
                        </div>

                        {/* Benefício 2 */}
                        <div className="singel-pricing p-8">
                            <h4>Criação de Tarefas com Checklists</h4>
                            <p>
                                Crie tarefas detalhadas e adicione checklists para garantir que cada etapa seja concluída com excelência.
                            </p>
                        </div>

                        {/* Benefício 3 */}
                        <div className="singel-pricing p-8">
                            <h4>Organização Visual Intuitiva</h4>
                            <p>
                                Tenha uma visão clara de todas as atividades em um quadro Kanban interativo e personalizável.
                            </p>
                        </div>

                        {/* Benefício 4 */}
                        <div className="singel-pricing p-8">
                            <h4>Colaboração em Tempo Real</h4>
                            <p>
                                Facilite o trabalho em equipe com atualizações em tempo real e notificações automáticas para manter todos alinhados.
                            </p>
                        </div>

                        {/* Benefício 5 */}
                        <div className="singel-pricing p-8">
                            <h4>Relatórios de Progresso</h4>
                            <p>
                                Gere relatórios personalizados para acompanhar o desempenho do projeto e tomar decisões baseadas em dados.
                            </p>
                        </div>

                        {/* Benefício 6 */}
                        <div className="singel-pricing p-8">
                            <h4>Preço Acessível</h4>
                            <p>
                                Tudo isso por apenas R$ 17,90/mês, com uma manutenção gratuita mensal. Qualidade e eficiência com custo reduzido.
                            </p>
                        </div>
                    </div>

                    <div className="theme-text text-center">
                        <div className="mt-9">
                            <a
                                href="https://wa.me/5562993398590?text=Oii%2C+quero+saber+mais+sobre+o+software+de+gest%C3%A3o+de+projetos!"
                                className="bg-blue-600 hover:bg-blue-700 m-3 mt-9 text-white font-bold py-2 px-4 rounded"
                                target="_blank"
                                onClick={handleClick}
                            >
                                Fale com um especialista
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Beneficios;