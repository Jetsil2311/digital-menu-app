import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { sections } from '../assets/sections.js';

export const MenuNavbar = () => {
    const { category } = useParams();
    const { section } = useParams();
    const selectedSection = section;
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='sticky-top'>
            <nav className='navbar navbar-expand-lg  bg-dark m-0 p-3'>
                <Link to={'/'} className='navbar-brand text-primary'><i className="fa-solid fa-house"></i></Link>
                {isSmallScreen && (
                    <button className='border-0 btn btn-outline-primary text-light' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                )}
                <div className={`collapse navbar-collapse ${isSmallScreen ? 'd-none' : ''}`}>
                    <ul className='navbar-nav mx-auto'>
                        <li key={'all'} className='nav-item'>
                            <Link to={`/menu/${category}/todos`} className={`btn btn-outline-primary mx-5 ${selectedSection == 'todos' && 'active'}`}>
                                Todos
                            </Link>
                        </li>
                        {sections.map((section) => {
                            if (section.category.toLowerCase() === category.toLowerCase()) {
                                return (
                                    <li key={section.id} className='nav-item'>
                                        <Link to={`/menu/${category}/${section.name.toLowerCase()}`} className={`btn btn-outline-primary mx-5 ${selectedSection == section.name.toLowerCase() && 'active'}`}>
                                            {section.name}
                                        </Link>
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </nav>

            <div className='offcanvas offcanvas-end bg-dark' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title h3 text-light' id='offcanvasNavbarLabel'>Menu</h5>
                    <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>
                <div className='offcanvas-body'>
                    <ul className='navbar-nav'>
                        <li key={'all'} className='nav-item'>
                            <Link to={`/menu/${category}/todos`} className={`btn btn-outline-primary mx-5 ${selectedSection == 'todos' && 'active'}`}>
                                Todos
                            </Link>
                        </li>
                        {sections.map((section) => {
                            if (section.category.toLowerCase() === category.toLowerCase()) {
                                return (
                                    <li key={section.id} className='nav-item'>
                                        <Link to={`/menu/${category}/${section.name.toLowerCase()}`} className={`btn btn-outline-primary my-4 mx-5 ${selectedSection == section.name.toLowerCase() && 'active'}`}>
                                            {section.name}
                                        </Link>
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};