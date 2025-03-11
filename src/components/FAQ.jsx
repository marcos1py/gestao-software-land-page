import React from 'react';

function FAQ() {
    return (
        <div className="container mt-10 mx-auto md:px-7">
            <section className="mb-32">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-5xl font-semibold leading-tight">
                            Perguntas mais <br /> frequentes<span className="text-sky-400"></span>
                        </h2>
                        <p className="font-bold">
                            <br />
                            Ainda tem dúvidas? <br />  
                            <a
                                href="#Contato"
                                className="font-bold text-sky-400 transition duration-300 hover:text-sky-300"
                            >
                               Entre em contato com o suporte
                            </a>
                            .
                        </p>
                    </div>

                    <div className="mb-6 md:mb-0">
                        {/* Pergunta 1 */}
                        <p className="mb-4 font-bold text-sky-400">
                            Como o software de gestão de projetos pode ajudar minha equipe?
                        </p>
                        <p className="mb-12 text-black">
                            Resposta: Nosso software oferece recursos como Kanban, criação de tarefas e checklists para otimizar a organização e aumentar a produtividade. Ele é intuitivo e personalizável, adaptando-se às necessidades da sua equipe.
                        </p>

                        {/* Pergunta 2 */}
                        <p className="mb-4 font-bold text-sky-400">
                            Qual é o modelo de pagamento disponível?
                        </p>
                        <p className="mb-12 text-black">
                            Resposta: O pagamento é mensal, no valor de R$ 17,90.
                        </p>

                        {/* Pergunta 3 */}
                        <p className="mb-4 font-bold text-sky-400">
                            Como posso solicitar personalizações no sistema?
                        </p>
                        <p className="mb-12 text-black">
                            Resposta: Para personalizações, basta entrar em contato com nosso suporte. Estamos prontos para entender suas necessidades e adaptar o sistema para melhor atender sua equipe.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;
