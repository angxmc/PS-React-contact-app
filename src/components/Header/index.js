// importing the style from Header.module.css as an object, so when we use it it would be styles.____
import styles from './Header.module.css';
function Header(props) {
    return (
      <div className={styles.container}>
        {/* <h1>Contacts App</h1> 
            I want to reuse this instead of typing Contacts App every time, 
            we pass a props parameter
            props._____, it can be any name we want to name it, but we have to pass it to the <Header/> in the App.js
            */}
        <h1>{props.title}</h1>
      </div>
    );
}

export default Header;