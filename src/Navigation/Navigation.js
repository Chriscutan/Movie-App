import { Link } from 'react-router-dom';

import '../Navigation/Navigation.css';


function Navigation(){
    return(
        <div className="navbar">
            <h1>MovieApp</h1>
            <div className="nav-links">
                <Link to="/" className='links'>Home</Link>
                <Link to="/add" className='links'>Add Movies</Link>
            </div>
        </div>
    );
}

export default Navigation;