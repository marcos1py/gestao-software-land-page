import React, { useState } from "react";
import Heading from "../layout/Heading";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userNumber: "",
    usermsg: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { userName, userEmail, userNumber, usermsg } = formData;

    const templateParams = {
      to_name: userName,
      message: usermsg,
      telefone: userNumber,
      email: userEmail,

    };

    emailjs.send('service_qhsvgw6', 'template_kz9nnbc', templateParams, '4VGvIndVHSvfqcmPm')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);

        // Clear the form fields
        setFormData({
          userName: "",
          userEmail: "",
          userNumber: "",
          usermsg: "",
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-2 mt-10">
      <Heading title1="Entre em" title2="Contato" />

      <div className="flex flex-col md:flex-row justify-between w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-20" onSubmit={sendEmail}>
          <div className="flex flex-col">
            <label htmlFor="userName">Seu nome</label>
            <input
              required
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all border border-gray-400"
              type="text"
              name="userName"
              id="userName"
              placeholder="inserir seu Nome"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Seu E-mail</label>
            <input
              required
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all border border-gray-400"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="inserir seu email"
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Seu Numero</label>
            <input
              required
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all border border-gray-400"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="inserir seu numero (62) 9 9999-9999"
              value={formData.userNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Sua mensagem</label>
            <input
            required
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all border border-gray-400"
              type="text"
              name="usermsg"
              id="usermsg"
              placeholder="Escreva sua duvida"
              value={formData.usermsg}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-center">
            <button
              type="submit"
              className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded"
            >
              Enviar
            </button>
          </div>
        </form>

        <div className="w-full md:w-2/4">
          <img
            className="hidden md:flex gap-5 font-medium text-lg items-center"
            src="./img/suporte.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;