
import { useContact } from "./hook/useContact";
import styles from "./Contact.module.scss";



const Contact = () => {
  const { data: contact } = useContact();
  console.log(contact);

  return (
      <div className={styles.wrapper}>
        <h1>СВЯЗАТСЯ С НАМИ </h1>
          <div className={styles.contactCard}>
              {contact?.map((contact) => (
                  <div key={contact.id} className={styles.contactWrapper}>
                      <a href={`tel:${contact.first_contact}`} className={styles.contactItem}>
                          {contact.first_contact}
                      </a>
                      <span className={styles.separator}> | </span>
                      <a href={`tel:${contact.second_contact}`} className={styles.contactItem}>
                          {contact.second_contact}
                      </a>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Contact;