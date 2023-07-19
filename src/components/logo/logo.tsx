import { Link } from "react-router-dom";

export default function Logo ():JSX.Element{
    return(
        <div className="header__block-logo">
            <Link to={'/'}>
                <div className="header__logo-img"/>
                <div className="header__logo-text">
                крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё&nbsp;8&nbsp;странах
                </div>
            </Link>
        </div>
    );
}