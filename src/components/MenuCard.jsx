import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const MenuCard = ({ name, long_desc, desc, price, flavors, image, id }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }, []);
    

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const BASE_URL = import.meta.env.BASE_URL;

    return (
        <li className='list-group-item col-12 col-md-6 col-lg-4 bg-dark py-3 px-3 mx-2 my-3 d-flex align-items-center'>
            <img className='img-fluid w-25 rounded-3 border border-primary' src={BASE_URL + `/products/${id}${image}`} alt={name} />
            <div className='mx-2'>
                <h4>{name}</h4>
                <p className='text-info small'>{desc}</p>
                <h6 className='text-primary'>${price}</h6>
                <button className="btn btn-secondary btn-sm mx-2" data-bs-toggle="popover" data-bs-content={long_desc}>
                    <i className="fa-solid fa-plus"></i>
                </button>
                {
                    flavors !== null && (
                        <button className='btn btn-secondary btn-sm mx-2' onClick={toggleDropdown}>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    )
                }
                <div className='dropdown mt-2'>
                    {isDropdownOpen && flavors !== null && (
                        <ul className='dropdown-menu show'>

                        {flavors.map((flavor, index) => (
                                <li key={index} className='dropdown-item'>{flavor}</li>
                            ))}

                        </ul>
                    )}
                </div>
            </div>
        </li>
    );
};

MenuCard.propTypes = {
    name: PropTypes.string.isRequired,
    long_desc: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    flavors: PropTypes.arrayOf(PropTypes.string).isRequired,
};