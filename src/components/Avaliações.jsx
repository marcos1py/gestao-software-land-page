import React from "react";
import { Link } from "react-scroll";

const Avaliacoes = () => {
    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                    Depoimentos de Quem Já Transformou a Gestão de Projetos
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    {/* Avaliação 1 - Gerente de Projetos */}
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt="Gerente de Projetos"
                                src="../img/gerente-projetos.jpeg"
                                className="h-14 w-14 rounded-full object-cover"
                            />

                            <div>
                                <p className="mt-0.5 text-lg font-medium text-gray-900">
                                    João Silva
                                </p>
                                <p className="mt-0.5 text-gray-600">
                                    Gerente de Projetos
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700">
                            "Com o software, nossa equipe conseguiu organizar projetos de forma ágil e eficiente. O sistema Kanban é intuitivo e facilitou o acompanhamento de todas as etapas. Recomendo!"
                        </p>
                    </blockquote>

                    {/* Avaliação 2 - CEO de Startup */}
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt="CEO"
                                src="./img/ceo.jpeg"
                                className="h-14 w-14 rounded-full object-cover"
                            />

                            <div>
                                <p className="mt-0.5 text-lg font-medium text-gray-900">
                                    Maria Oliveira
                                </p>
                                <p className="mt-0.5 text-gray-600">
                                    CEO de Startup
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700">
                            "Desde que começamos a usar o sistema, conseguimos otimizar nossa gestão de tarefas e reduzir o retrabalho. A funcionalidade de checklists é excelente para garantir que nada fique de fora."
                        </p>
                    </blockquote>

                    {/* Avaliação 3 - Consultor de Projetos */}
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt="Consultor"
                                src="../img/consultor.jpeg"
                                className="h-14 w-14 rounded-full object-cover"
                            />

                            <div>
                                <p className="mt-0.5 text-lg font-medium text-gray-900">
                                    Carlos Lima
                                </p>
                                <p className="mt-0.5 text-gray-600">
                                    Consultor de Projetos
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700">
                            "A gestão de projetos nunca foi tão prática. O sistema é rápido, fácil de usar e trouxe mais clareza e produtividade para nossas rotinas. Vale cada centavo!"
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Avaliacoes;