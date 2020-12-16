import Header from "../components/Header";
import Sidebar from '../components/Sidebar';
import PropTypes from "prop-types"

function Main(props) {
    return (
        <div id="wrapper">
            <Header />
            <div id="main">
                {props.children}
            </div>
            {props.fullPage ? null : <Sidebar/>}
        </div>
    );
}

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    fullPage: PropTypes.bool
};

Main.defaultProps = {
    children: null,
    fullPage: false
};

export default Main;