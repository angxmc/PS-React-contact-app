import ContactsList from '../ContactsList';
import styles from './Main.module.css'
function Main() {
  return (
    <main className={styles.container}>

      <section className={styles.sec1}>
        <ContactsList/>
      </section>

      <section className={styles.sec2}>
        <h2>Contact Form</h2>
      </section>

    </main>
  );
}
export default Main;