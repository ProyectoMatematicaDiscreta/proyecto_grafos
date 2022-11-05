/* Codigo realizado por  lizardo */
/* Componente Navbar */
// Importacion de librerias
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import stylesNavbar from "../.../../styles/Navbar.module.css";
import { supabase } from "../supabase/client";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);//Uso del estado
  const [user, setUser] = useState();

  useEffect(() => {
    async function getsesion() {
      const { data, error } = await supabase.auth.getUser();
      if (data) {
        setUser(data.user_metadata)

      }

    }
    getsesion();
  })
  const handleSubmit = () => {
    
    async function signout() {
      const { error } = await supabase.auth.signOut()
    }
    signout()
  }
  return (
    <nav className="w-full bg-cyan-400 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">

            <Link href="/"><a className="text-2xl font-bold text-white"><Logo /></a></Link>

            <ul id={stylesNavbar.itemsNavbar} className=" flex space-x-6  ">
              <li className="text-white hover:text-indigo-200">
                <Link href="/grafos"><a >Grafos</a></Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link href="/questions"><a >Preguntas</a></Link>
              </li>

              <li className="text-white hover:text-indigo-200">
                <Link href="/handbook"><a>Manual de usuario</a></Link>
              </li>
            </ul>
            {!user ? <div className="flex space-x-6" id={stylesNavbar.buttoms}>
              <Link href="/login"><a className="inline-block w-full px-4 py-2 text-center text-white bg-yellow-400 rounded-md shadow hover:bg-green-700"
              >
                Ingresar
              </a></Link>
              <Link href="sign_up"><a className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-green-700 rounded-md shadow hover:bg-yellow-400">
                Registrarse
              </a></Link>
            </div> : <div className="flex">  <p className="my-auto bg-amber-400 p-4  rounded-t-2xl">{user.name}</p>  <form onSubmit={handleSubmit}><button className="bg-red-600 p-4 ml-4 rounded-t-2xl" type="submit">Cerrar Session</button></form></div>}


            <div id={stylesNavbar.icon} className="">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <Link href="/grafos"><a >Grafos</a></Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link href="/questions"><a>Preguntas</a></Link>
              </li>


              <li className="text-white hover:text-indigo-200">
                <Link href="/handbook"><a>Manual de usuario</a></Link>
              </li>
            </ul>
            {!user ? <div className="flex space-x-6" id={stylesNavbar.buttoms}>
              <Link href="/login"><a className="inline-block w-full px-4 py-2 text-center text-white bg-yellow-400 rounded-md shadow hover:bg-green-700"
              >
                Ingresar
              </a></Link>
              <Link href="sign_up"><a className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-green-700 rounded-md shadow hover:bg-yellow-400">
                Registrarse
              </a></Link>
            </div> : <form onSubmit={handleSubmit}>{user.name}<button className="bg-red-600 inline-block w-full" type="submit">Cerrar Session</button></form>}

          </div>
        </div>

      </div>
    </nav>
  );

};
