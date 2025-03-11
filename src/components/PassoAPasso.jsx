import React from "react";
import { Link } from "react-scroll";

const PassoAPasso = () => {
  return (
    <div className="container mx-auto py-12 text-center">
      <h2 className="text-3xl font-semibold mb-8 text-blue-500">A evolução do seu negócio começa aqui</h2>
      <div className="max-w-lg mx-auto space-y-8">
        <div className="bg-white p-4 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-2">Passo 01</h3>
          <p className="text-gray-700 text-sm">
            No primeiro momento, marcamos uma call para você nos contar sobre o seu projeto/negócio. Ao entendermos a sua necessidade, indicamos as melhores soluções oferecidas pela Super Converte para ajudá-lo a alcançar mais vendas.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-2">Passo 02</h3>
          <p className="text-gray-700 text-sm">
            Após o entendimento da sua necessidade, enviamos uma proposta. Se aceita, faremos um briefing para compreender melhor seus desejos, medos e expectativas, garantindo uma devolutiva com máxima satisfação.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-xl border">
          <h3 className="text-lg font-semibold mb-2">Passo 03</h3>
          <p className="text-gray-700 text-sm">
            Agora é com a gente! Vamos desenvolver um design único para sua página ou site. Toda a estrutura é criada do zero, sem templates ou modelos. Tudo é feito unicamente para você!
          </p>
        </div>
      </div>
      <div className="mt-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Solicitar orçamento
          </button>
      </div>
    </div>
  );
};

export default PassoAPasso;
