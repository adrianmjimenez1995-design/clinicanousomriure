/**
 * pages.config.js — registre de pàgines.
 *
 * Cada pàgina es publica a /<Nom> (català) i a /es/<Nom> (castellà).
 * Per afegir-ne una: crea-la a ./pages/, importa-la aquí i afegeix-la a PAGES.
 * mainPage és la pàgina d'inici (/ i /es).
 */
import AvisLegal from './pages/AvisLegal';
import Contacto from './pages/Contacto';
import Cookies from './pages/Cookies';
import Equip from './pages/Equip';
import Home from './pages/Home';
import Privacitat from './pages/Privacitat';
import Servicios from './pages/Servicios';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AvisLegal": AvisLegal,
    "Contacto": Contacto,
    "Cookies": Cookies,
    "Equip": Equip,
    "Home": Home,
    "Privacitat": Privacitat,
    "Servicios": Servicios,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
