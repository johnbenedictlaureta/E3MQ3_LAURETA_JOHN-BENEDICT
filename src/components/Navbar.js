import {Link} from 'react-router-dom'

const Navbar = ({user}) => {
    const alertNotice = () => (alert(`Hello  ${user}`))
    return (
        <nav>
        <ul class="Navbar">
            <Link to = '/' className= 'leftside' > 
            <li>Home</li>
            </Link>
            <Link to = '/About' className= 'leftside' > 
            <li>About</li>
            </Link>
            <li className="user" onClick={alertNotice}>Hello <span>{user}</span>
            </li>
        </ul>
    </nav>
    )
}
export default Navbar;