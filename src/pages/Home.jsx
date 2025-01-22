import {categories} from "../assets/categories.js";
import {Link} from "react-router-dom";
import brand from '../assets/branding/brand.webp'

export const Home = () => {


    return (
        <div className='container'>


            <div className='container text-center'>
                <img src={brand} alt='brand'
                     className='img-fluid rounded my-3 w-25'/>
                <h2 className='h2 fw-bold text-primary p-2 '>Cafetería</h2>
            </div>
            <ul className='container px-5'>
                {
                    categories.map((category => {
                        return (
                            <li key={category.id} className='list-group-item d-grid gap-2 col-4 mx-auto'>
                                <Link to={`/menu/${category.name.toLowerCase()}/todos`}
                                      className='btn btn-outline-primary col-12 my-3 text-center fs-3'>{category.name}</Link>
                            </li>
                        )
                    }))
                }
            </ul>

        </div>
    )
}