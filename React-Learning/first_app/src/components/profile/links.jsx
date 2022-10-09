import React from 'react'

const Links = (props) => (
    <div className='Links'>
    <h3>Social Links: </h3>
    <ul>
        <li>
            <a href='#'>{props.socialLink1}</a>
        </li>
        <li>
            <a href='#'>{props.socialLink2} </a>
        </li>
        <li>
            <a href='#'>{props.socialLink3} </a>
        </li>
    </ul>
</div>
);

export default Links