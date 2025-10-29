

import './Especies.css';
import Eoraptor from '../assets/Eoraptor.webp';
import Coelophysis from '../assets/Coelophysis.webp';
import Apatosaurus from '../assets/Apatosaurus.webp';
import Stegosaurus from '../assets/Stegosaurus.webp';

export default function Especies() {

  return (


    <section className="seccion-especies"  id='especies'>
      <div className="container">
        <h2 className="title-especies">¡CONOCE ALGUNAS DE LAS ESPECIES QUE HABITARON ESTE PLANETA!</h2>


        <div className='row'>

          <div className='contenedor-info col-md-6'>
              <h3 className='titulo-info mb-4'>Introducción</h3>
              <p className='text-intro mb-4'>Hace más de 250 millones de años, nuestro planeta era un lugar muy distinto al que conocemos hoy. 
                Todos los continentes estaban unidos formando un enorme supercontinente, lo que creó ecosistemas vastos
                y únicos. La vida floreció de maneras asombrosas: enormes dinosaurios terrestres, 
                mientras que en los océanos se desarrollaban peces prehistóricos y criaturas 
                marinas sorprendentes. Explorar estas especies nos permite asomarnos a un mundo lleno de aventuras
                 y diversidad. 
              </p>
           
              
          </div>

          <div className="img-especies col-md-6">
            <div className='galeria'>

              <div className='imagen-con-texto'>
                <img src={Eoraptor} alt="Eoraptor" />
                <p className='texto-superpuesto'>Eoraptor</p>
              </div>

              <div className='imagen-con-texto'>
                <img src={Coelophysis} alt="Coelophysis" />
                <p className='texto-superpuesto'>Coelophysis</p>
              </div>

              <div className='imagen-con-texto'>
                <img src={Apatosaurus} alt="Apatosaurus" />
                <p className='texto-superpuesto'>Apatosaurus</p>
              </div>

              <div className='imagen-con-texto'>
                <img src={Stegosaurus} alt="Stegosaurus" />
                <p className='texto-superpuesto'>Stegosaurus</p>
              </div>

            </div>
          </div>


        </div>
      </div>
    </section>

  );
}
