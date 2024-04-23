import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul className='ul-navbar'>
                <li className='li-navbar'>
                    <a href='/'>ALL</a>
                </li>
                <li>
                    <a href='/Duelist'>DUELIST</a>
                </li>
                <li>
                    <a href='/Initiator'>INITIATOR</a>
                </li>
                <li>
                    <a href='/Sentinel'>SENTINEL</a>
                </li>
                <li>
                    <a href='Controller'>CONTROLLER</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;