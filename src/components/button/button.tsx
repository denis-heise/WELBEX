import { Link } from "react-router-dom";
import { ItemMenu } from "../../types/types";

type ButtonTypeProps = {
    propsButton: ItemMenu
}

export default function Button ({propsButton}: ButtonTypeProps):JSX.Element{
    return(
        <Link to={propsButton.link} className={propsButton.class ? propsButton.class : ''}>
            <div>{propsButton.title}</div>
        </Link>
    );
}