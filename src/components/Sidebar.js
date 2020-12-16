import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../data/contact';

function Sidebar() {
    return (
        <section id="sidebar">
            <section id="intro">
                <Link to="/" className="logo">
                    <img src={"/images/me_icon.jpeg"} alt="" />
                </Link>
                <header>
                    <h2>Griffin Storback</h2>
                    <p><a href="mailto:griffinstorback@gmail.com">griffinstorback@gmail.com</a></p>
                </header>
            </section>

            <section className="blurb">
                <h2>About</h2>
                <p>Hi, I&apos;m Griffin.
                    I&apos;m a mobile app developer.
                </p>
                <ul className="actions">
                    <li>
                        {window.location.pathname !== "/resume" ?
                            <Link to="/resume" className="button">Learn More</Link> :
                            <Link to="/about" className="button">About Me</Link>}
                    </li>
                </ul>
            </section>

            <section id="footer">
                <ul className="icons">
                    {data.map((s) => (
                        <li key={s.label}>
                            <a href={s.link}>
                                <FontAwesomeIcon icon={s.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="copyright">&copy; Griffin Storback <Link to="/">griffinstorback.com</Link>.</p>
            </section>
        </section>
    )
}

export default Sidebar;