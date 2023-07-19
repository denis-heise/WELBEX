import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function PhoneNumber ():JSX.Element{
    return(
        <Fragment>
            <Link to={'tel:+75555555555'} className="phone-number">
                +7&nbsp;555&nbsp;555-55-55
            </Link>
        </Fragment>
    );
}