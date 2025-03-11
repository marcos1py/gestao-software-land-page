import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <section className="">

 
      <div className="max-w-screen-xl px-4 py-7 mx-auto  overflow-hidden ">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <ScrollLink
              className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
              to="sobre"
              spy={true}
              smooth={true}
              duration={500}
            >
              Quem Somos?
            </ScrollLink>
          </div>
          <div className="px-5 py-2">
            <ScrollLink
              className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
              to="beneficios"
              spy={true}
              smooth={true}
              duration={500}
            >
              Benefícios
            </ScrollLink>
          </div>
          <div className="px-5 py-2">
            <ScrollLink
              className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
              to="Depoimentos"
              spy={true}
              smooth={true}
              duration={500}
            >
              Depoimentos
            </ScrollLink>
          </div>
          <div className="px-5 py-2">
            <ScrollLink
              className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
            >
              Blog
            </ScrollLink>
          </div>
          <div className="px-5 py-2">
            <ScrollLink
              className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
              to="Contato"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contato
            </ScrollLink>
          </div>
          <div className="px-5 py-2">
            <ScrollLink
              className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
              to="faq"
              spy={true}
              smooth={true}
              duration={500}
            >
              FAQ
            </ScrollLink>
          </div>
        </nav>

        <p className=" mt-2 text-base leading-6 text-center text-gray-400">
          Email: Contato@gestaodeprojetosfacil.com.br <br />
          Tel: <a href="https://wa.me/5562993398590?text=Oii%2C+queria+saber+mais+sobre+a+empresa.">+55 62 9 9339-8590</a>
        </p>
        <p className="mt-1 text-base leading-6 text-center text-gray-400">
          © 2023 Gestão de Projetos, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
