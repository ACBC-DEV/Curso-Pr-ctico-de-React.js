import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss' 

const NotFound = () => {
    return (
        <div className='main-container-error'>
            <div className="error-container">
                <h1>¡Oops!</h1>
                <p>It seems like we couldn't find the page you were looking for</p>
                <img src="https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.png" alt="Error 404" />
                <Link className='back-link' to='/'>Go back</Link>
            </div>
        </div>

    );
}

export  {NotFound};