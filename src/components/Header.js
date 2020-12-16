import routes from '../data/routes';
import Hamburger from './Hamburger';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id="header">
            <h1 className="index-link">
                <a href="/">
                    {routes.filter((l) => l.index).map((l) => (
                        <Link key={l.label} to={l.path}>{l.label}</Link>
                    ))}
                </a>
            </h1>
            <nav className="links">
                <ul>
                    {routes.filter((l) => !l.index).map((l) => (
                        <li key={l.label}>
                            <Link to={l.path}>{l.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Hamburger/>
        </header>
    );
}

export default Header;