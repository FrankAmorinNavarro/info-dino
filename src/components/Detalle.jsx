import { useState, useEffect } from 'react';
import './Detalle.css';

import especies1 from '../assets/especies1.webp';
import especies2 from '../assets/especies2.webp';
import especies3 from '../assets/especies3.webp';
export default function Detalle() {

    const images = [especies1, especies2, especies3];

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalo);
    }, [images.length]);
    return (


        <>
            <section className='section-detail'>
                <div className='container container-detail'>
                    <h1 className="title-detalle">ESTA ES LA 2DA ETAPA DE PANGEA(PÉRMICO)</h1>
                    <h2 className='subtitle-detail'>(299-252 millones de años atrás)</h2>
                    <p className='text-detail'>Fue una época de gran diversificación de reptiles y plantas terrestres, pero también marcó el
                        final del Paleozoico con la extinción masiva del Pérmico, el evento más devastador en la historia de la
                        Tierra, que eliminó cerca del 90% de las especies marinas y el 70% de las terrestres.Pangea alcanzó su máxima extensión,
                        formando un único y gigantesco supercontinente rodeado por el vasto océano Panthalassa. Esta unión continental generó enormes
                        cordilleras, vastos desiertos en el interior del continente y un clima extremo con fuertes contrastes entre regiones áridas y costeras.</p>
                </div>

                <div className='slider'>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`slide ${index === current ? "active" : ""}`}
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                objectFit:"cover"
                            }}></div>
                    ))}

                    <button onClick={() => setCurrent((current - 1 + images.length) % images.length)}>❮</button>
                    <button onClick={() => setCurrent((current + 1) % images.length)}>❯</button>
                </div>

            </section >

            <section className='section-etapa'>
                <div className='container container-detail'>
                    <h2 className='title-detalle'>ESTA ES LA 3RA PARTE DE LA ETAPA DE PANGEA(TRIÁSICO)</h2>
                    <h3 className='subtitle-detail'>(252-201 millones de años atrás)</h3>
                    <p className='text-detail'>
                        Durante el Triásico, Pangea aún permanecía unida como un supercontinente gigante rodeado por un solo océano.
                        El clima era cálido, seco y extremo, con vastos desiertos en su interior y pocas zonas húmedas en las costas.
                        Tras la gran extinción del Pérmico, la vida comenzó a recuperarse: aparecieron los primeros dinosaurios, mamíferos
                        primitivos y reptiles marinos.También surgieron las primeras plantas modernas, como las coníferas y los ginkgos.
                        Al final del Triásico, Pangea empezó a fracturarse lentamente, abriendo grietas que darían origen a los futuros continentes y a nuevos océanos.
                    </p>
                </div>

                    <video className='video-triasico mt-5' 
                            autoPlay
                            controls
                            muted
                            loop> <source  src='/videos/video-Triasico.mp4' type='video/mp4'/>
                            El navegador no pudo cargar el video o me lo tumbaron por copyRight ekide</video>
            </section>
        </>

    );
}