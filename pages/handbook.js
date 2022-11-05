/* Codigo realizado por dani y lizardo */
/* Pagina de manual de usuarios */
// Importacion de librerias
import Navbar from "../components/Navbar";

export default function handbook() {
  return(
    <div>
      <Navbar/>
      <div className="grid place-content-center">
        <h1 className="mt-4 text-5xl">Manual de usuario</h1>
        <div className="row">
        <ul className="mt-5 ">
          <li>
            <div className="bg-slate-600 p-10 ">
              
                Cuando el usuario ingresa a la página el usuario verá la página de inicio en la cual estarán los componentes como lo son el navbar  y los componentes que tienen las imágenes y el contenido  <br /> de los grafos.
              
            </div>
          </li>
            <li> <div className="bg-slate-600 p-10 mt-5 ">
              El usuario para entrar al sistema de los grafos deberá iniciar sesión o registrarse para entrar al apartado del sistema en general.
            </div></li>
          <li>
              <div className="bg-slate-600 p-10 mt-5 ">
                Si el usuario no posee una cuenta o no sé a  registrado deberá pulsar en el botón del navbar de  registrarse para luego entrar a la pestaña de registrarse.
              </div>
          </li>
            <li>
              <div className="bg-slate-600 p-10 mt-5 ">
                En la pestaña de registrarse le aparecerá el formulario donde debe colocar sus  respectivos datos para luego poder ser dirigidos hacia la pestaña de sistema general de los grafos.
              </div>
            </li>
            <li>
              <div className="bg-slate-600 p-10 mt-5 ">
                Si el usuario ya posee una cuenta deberá pulsar el botón de ingresar que se encuentra en el navbar y con ello lo de redirigirá a la pestaña login.
              </div>
            </li>
            <li>
              <div className="bg-slate-600 p-10 mt-5 ">
                En la pestaña login tendrá que ingresar los datos como los que se registró de lo contrario le marcara un error y no podrá iniciar sesión.
              </div>
            </li>
            <li>
              <div className="bg-slate-600 p-10 mt-5 ">
                Si el usuario ya realizo su proceso de registro o inicio de sesión será redirigido hacia la pantalla de los grafos de lo contrario puede ser redirigido hacia la pestaña de login o de registro.
              </div>
            </li>
            <li>
              <div className="bg-slate-600 p-10 mt-5 ">
                En el apartado de grafos podemos encontrar  puede realizar cualquier tipo de figura que esté dada en el menú hijo haya realizar los distintos tipos de grafos. Así mismo podrá <br />  exportar para guardar en un archivo que pueda ser reconocido por la API de excalidraw  que es un . excalidraw o bien puede exportarlo como PNG o como SVG.
              </div>
            </li>
            <li>
              <div className="bg-slate-600 p-10 mt-5 ">
                En el apartado de grafos podemos puede archivos que pueda ser reconocido por la API de excalidraw  que es un . excalidraw o bien puede eser un PNG o cualquier imagen  o como SVG.
              </div>
            </li>
            <li>
              <div className="bg-slate-600 p-10 mt-5 ">
                En el apartado de grafos podemos encontrar que se puedan realizar distintos tipos de figuras en las cuales se pueden editar de diversas formas y colorear de una manera que el usuario <br /> pueda elegir cómo desea tener su diseño de los grafos.
              </div>
            </li>
            <li>
              <div className="bg-slate-600 p-10 mt-5 mb-3">
                Apartado de preguntas tendremos que podemos hacer las distintas preguntas para que la Comunidad de los distintos usuarios puedan resolver sus dudas.Una regla esencial es <br /> que no se pueden escribir malas palabras. De lo contrario puede ser sancionado o baneado.
              </div>
            </li>
        </ul>
        </div>
      </div>
    </div>
  )
};
