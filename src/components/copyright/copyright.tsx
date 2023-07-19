import { Link } from "react-router-dom";

export default function Copyright ():JSX.Element{
    return(
        <div className="footer__copyright">
            <div>©WELBEX 2022. Все права защищены.</div>
            <Link to={'#'}>Политика конфиденциальности</Link>
        </div>
    );
}