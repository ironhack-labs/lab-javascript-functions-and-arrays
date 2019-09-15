import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/not-fount-404.css';

const Notfound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <Link to="/">Go to Home </Link>
            </div>
        </div>
    )
};

export default Notfound;