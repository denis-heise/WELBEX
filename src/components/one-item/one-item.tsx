import { Link } from 'react-router-dom';
import { ItemMenu } from "../../types/types";

type PropItem = {
    propsItem: ItemMenu
}

export default function OneItem ({propsItem}: PropItem): JSX.Element{
    return(
        <li className={propsItem.class ? propsItem.class : ''}>
            <Link to={propsItem.link}>
                {propsItem.title}
            </Link>
        </li>
    );
}