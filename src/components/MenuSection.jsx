import {MenuCard} from "./MenuCard.jsx";
import {SectionBanner} from "./SectionBanner.jsx";
import {products} from "../assets/products.js";

export const MenuSection = ({children, desc}) => {
    return (
        <div>
            <SectionBanner desc={desc}>{children}</SectionBanner>
            <ul className='container'>
                <div className='row mx-5 mb-4 '>
                    {
                        products.map((product) => {
                            if (product.section === children) {
                                return <MenuCard key={product.id} name={product.name} desc={product.desc} price={product.price} img={product.img} long_desc={product.long_desc} flavors={product.flavors ? product.flavors : null} image={product.image} />
                            }
                        })
                    }
                </div>
            </ul>
        </div>
    )
}