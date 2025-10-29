import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import paisaje from '../../assets/paisaje.webp';
export default function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (id) => {
        if(location.pathname !== "/"){
            navigate("/");

            setTimeout(() =>{
                const section = document.querySelector(id);
                if(section) section.scrollIntoView({ behavior : "smooth"});
            },200);
        } else{
            const section = document.querySelector(id);
            if(section) section.scrollIntoView({ behavior : "smooth"});
        }
    };
    return (
        <header>
            <nav className="navbar navbar-expand-lg" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${paisaje})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity:'0.90'
            }}>
                <div className="container">
                    {/* Logo o nombre mi sitio */}
                    <a className="navbar-brand" href="#home" style={{color:'#fff'}}>FrankAN</a>

                    {/* Botón hamburguesa para móviles */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menú */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleNavigation('#home')}>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=> handleNavigation('#especies')}>Especies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  onClick={()=> handleNavigation('#historia')}>Historia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=> handleNavigation('#saber-mas')}>Saber Más</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}