import React from 'react'

const Header = () => {
    return (
        <div><ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
            </li>
        </ul>
        </div>
    )
}

export default Header