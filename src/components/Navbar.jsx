import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isBlogPage, setIsBlogPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se a URL contém "/blog"
    setIsBlogPage(window.location.pathname.includes("/blog"));
  }, []); // Executa apenas uma vez no carregamento inicial

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="backgrond ">
      <div className=" flex p-5 px-5 items-center">
        <div className=" mr-10 ">
          <Link
            onClick={() => navigate("/")}
            className="flex items-center font-semibold  text-3xl p-1 cursor-pointer"
          >
            <img src="./img/logoteste2.png" alt="Logo" className="w-20 mr-2" />
            Gestão de Projetos
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="hidden md:flex gap-5 font-medium text-lg items-center mr-10">
          <Link
            className="hover:text-[#A7CEFC] transition-all cursor-pointer"
            onClick={() => navigate("/")}
            to="sobre"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>

          <div
            className={`${
              isBlogPage ? "text-[#A7CEFC]" : "hover:text-[#A7CEFC]"
            } transition-all cursor-pointer`}
            onClick={() => navigate("/blog")}
          >
            Blog
          </div>
        </div>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-blue-500 left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          onClick={() => navigate("/")}
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#A7CEFC] transition-all cursor-pointer"
        >
          Home
        </Link>


        <div
          className="hover:text-[#A7CEFC] transition-all cursor-pointer "
          onClick={() => navigate("/blog")}
        >
          Blog
        </div>
      </div>
    </div>
  );
};

export default Navbar;
