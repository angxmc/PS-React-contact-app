import styles from './Navbar.module.css'
function Navbar(){
    return(
        <nav>
            <ul className={styles.container}>
                <li>Home</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}
//pass this to App.js
export default Navbar;