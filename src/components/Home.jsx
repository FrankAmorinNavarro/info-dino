
import './Home.css';
import mundo from '../assets/mundo.webp';


export default function Home() {

    const text = "¡Bienvenido a Mundo Pangea!";

    return (

        <section className='section-home' id='home'>
            <div className='container'>

                <h4 className='sub-title'>
                    ¡ADENTRATE EN ESTE MUNDO SALVAJE!
                </h4>
                <h1 className='title'>{text.split("").map((char, index) => (
                    <span key={index} className='letter'> {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}</h1>
                
                <div className='row'>
                    <div className='home-text col-md-6'>
                        <p className='text'>
                            Hace millones de años, durante la era Mesozoica, los dinosaurios dominaron la Tierra.
                            En aquel tiempo, los continentes no estaban separados como hoy los conocemos,
                            formaban una gran masa de tierra llamada Pangea. Este supercontinente permitió
                            que los dinosaurios se expandieran y convivieran en vastas llanuras, desiertos y selvas primitivas.
                        </p>
                        
                    </div>

                    <div className='content-mundo col-md-6 pb-5'>
                        <img src={mundo} alt="Pangea" className='img-fluid' />
                    </div>
                </div>
            </div>

        </section>
    );
}