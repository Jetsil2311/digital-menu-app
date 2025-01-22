import './styles/custom.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Menu} from "./pages/Menu.jsx";


export const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/menu/:category/:section' element={<Menu />} />

                <Route path='/menu/:category' element={<Navigate to='/'/>} />
                <Route path='/menu' element={<Navigate to='/'/>} />
                <Route path='/*' element={<Navigate to='/'/>} />
            </Routes>
        </>
    )
}