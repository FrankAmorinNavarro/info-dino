
import { Link } from 'react-router-dom';
import './Historia.css';


export default function Historia() {
    return (

        <section className='section-historia' id='historia'>
            <div className='contenedor-historia container'>
                <h2 className='titulo-historia'>Historia</h2>
                <p className='texto-historia'>
                    Hace unos 335 millones de años, las placas tectónicas unieron todos los continentes en una sola gran masa
                    terrestre llamada Pangea, rodeada por el océano Pantalasa. En su interior predominaban los climas secos y calurosos,
                    con vastos desiertos, mientras que en las zonas costeras existían bosques y pantanos donde prosperaban los primeros reptiles y anfibios.
                    Con el paso del tiempo, las fuerzas internas de la Tierra hicieron que Pangea comenzara a fracturarse lentamente.
                    Primero se dividió en dos grandes bloques, y millones de años después, esas divisiones continuaron hasta dar forma a los continentes actuales.
                </p>

                <ul>
                    <li><b>Laurasia:</b> al norte (que luego formaría América del Norte, Europa y Asia).</li>
                    <li><b>Gondwana:</b> al sur (que luego formaría América del Sur, África, la Antártida, Australia e India).</li>
                </ul>
            </div>

            <div className='contenedor-pangea container'>
                <h2 className='titulo-historia'>¿Cómo desapareció el continente Pangea?</h2>
                <p className='texto-historia'>
                    Hace millones de años, todos los continentes de la Tierra estaban unidos en una sola gran masa llamada Pangea.
                    Con el paso del tiempo, las fuerzas internas del planeta comenzaron a mover lentamente las placas tectónicas,
                    provocando que este supercontinente se fracturara y se separara. Así comenzó el proceso que dio origen a los continentes
                    tal como los conocemos hoy.
                </p>
                <video className='video-pangea mt-3'
                    controls
                    autoPlay
                    muted
                    loop>
                    <source src='/videos/extincion-pangea.mp4'
                        type='video/mp4' />El navegador no pudo cargar el video o me lo tumbaron por copyRight ekide
                </video>
                <Link to="/detalle" rel='noopener noreferrer'>
                    <button className='btn-saber' id='saber-mas'>Saber Más ▶</button>
                </Link>

            </div>
        </section>
    );
}