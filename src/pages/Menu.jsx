import {Navigate, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import { MenuNavbar } from '../components/MenuNavbar.jsx';
import { MenuSection } from '../components/MenuSection.jsx';
import { sections } from '../assets/sections.js';

export const Menu = () => {
    const { category } = useParams();

    const {section} = useParams();

    return (
        <div className='container bg-secondary p-0'>
            <MenuNavbar />
            {sections.map((objSection) => {
                if (objSection.category.toLowerCase() === category.toLowerCase()) {
                    if (objSection.name.toLowerCase() === section.toLowerCase()) {
                        return (
                           <MenuSection key={objSection.id} desc={objSection.desc}>
                                {objSection.name}
                           </MenuSection>
                        );
                    } else if (section === 'todos') {
                        return (
                            <MenuSection key={objSection.id} desc={objSection.desc}>
                                {objSection.name}
                            </MenuSection>
                        );
                    }
                }
                return null;
            })}
        </div>
    );
};
