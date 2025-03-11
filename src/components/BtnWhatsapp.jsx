import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const BtnWhatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
        name: name,
        number: number,
    };

    emailjs.send('service_rwujpni', 'template_g88r4q8', templateParams, 'asJiqh4b4aDU9LP-U')
      .then((response) => {
        alert('Email enviado com sucesso!');
        setIsOpen(false);
        // Limpar os campos após enviar
        setName('');
        setNumber('');
      })
      .catch((error) => {
        console.error('Erro ao enviar o email:', error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openPopup}
      >
        Abrir Pop-up
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md">
            <span
              className="absolute top-0 right-0 cursor-pointer text-3xl"
              onClick={closePopup}
            >
              &times;
            </span>
            <h2 className="text-xl font-bold mb-4">Preencha seus dados</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                  Número:
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closePopup}
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BtnWhatsapp;
