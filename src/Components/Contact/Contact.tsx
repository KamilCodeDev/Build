
import { useContact } from "./hook/useContact";
import styles from "./Contact.module.scss";
import { BsTelephoneInbound } from "react-icons/bs";



const Contact = () => {
  const { data: contact } = useContact();
  console.log(contact);

  return (
      <div id="Contact" data-aos="fade-up" className={styles.wrapper}>
        <h1>Контакты </h1>
          <div className={styles.contactCard}>
              {contact?.map((contact) => (
                  <div key={contact.id} className={styles.contactWrapper}>
                    <BsTelephoneInbound />
                      <a href={`tel:${contact.first_contact}`} className={styles.contactItem}>
                          {contact.first_contact}
                      </a>
                      <span className={styles.separator}> | </span>
                      <BsTelephoneInbound />
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









