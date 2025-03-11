import React from "react";

const Blog = () => {
    const handleClick = () => {
        fbq('track', 'Contact');
    };

    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                    Blog de Gestão de Projetos
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

                    {/* Blog Post 1 - Benefícios do Kanban */}
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img src="./img/blog1.png" alt="Kanban" className="w-full h-40 object-cover" />
                        </div>
                        <div>
                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                                Como o Kanban Revoluciona a Gestão de Projetos
                            </p>
                        </div>
                        <p className="mt-4 text-gray-700">
                            Descubra como utilizar o Kanban para melhorar o fluxo de trabalho, aumentar a produtividade da equipe e entregar projetos com mais eficiência.
                        </p>
                        <div className="theme-text text-center">
                            <button className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                                Ler mais sobre
                            </button>
                        </div>
                    </blockquote>

                    {/* Blog Post 2 - Dicas para Gerenciar Tarefas */}
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img src="./img/blog2.png" alt="Gestão de Tarefas" className="w-full h-40 object-cover" />
                        </div>
                        <div>
                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                                5 Dicas para uma Gestão de Tarefas Eficiente
                            </p>
                        </div>
                        <p className="mt-4 text-gray-700">
                            Aprenda estratégias práticas para criar e gerenciar tarefas que realmente impulsionam o progresso dos seus projetos.
                        </p>
                        <div className="theme-text text-center">
                            <button className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                                Ler mais sobre
                            </button>
                        </div>
                    </blockquote>

                    {/* Blog Post 3 - Vantagens de Checklists em Projetos */}
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img src="./img/blog3.png" alt="Checklists em Projetos" className="w-full h-40 object-cover" />
                        </div>
                        <div>
                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                                Por que Utilizar Checklists na Gestão de Projetos?
                            </p>
                        </div>
                        <p className="mt-4 text-gray-700">
                            Entenda como os checklists podem aumentar a eficiência, garantir a entrega de todas as tarefas e reduzir erros no processo de gestão de projetos.
                        </p>
                        <div className="theme-text text-center">
                            <button className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                                Ler mais sobre
                            </button>
                        </div>
                    </blockquote>

                </div>
            </div>
        </section>
    );
};

export default Blog;
