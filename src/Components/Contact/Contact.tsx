
import { useContact } from "./hook/useContact";
import styles from "./Contact.module.scss";
import { PiPhoneCall } from "react-icons/pi";
import telegram from "../../assets/telegram.png"
import intagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook (2).png"
import { MdOutlineMailOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { data: contact } = useContact();
  const { t } = useTranslation();
  console.log(contact);

  return (
    <div id="Contact" data-aos="fade-up" className={styles.wrapper}>
      <h1>{t('contacts')}</h1>
      <div className={styles.contactCard}>
        {contact?.map((contact) => (
          <div key={contact.id} className={styles.contactWrapper}>
            <div>
              <PiPhoneCall size={30} />
              <a href={`tel:${contact.first_contact}`} className={styles.contactItem}>
                {contact.first_contact}
              </a>
            </div>
            <div>
              <PiPhoneCall size={30} />
              <a href={`tel:${contact.second_contact}`} className={styles.contactItem}>
                {contact.second_contact}
              </a>
            </div>
          </div>
        ))}
        <div className={styles.info}>
          <div className={styles.email}>
            <MdOutlineMailOutline size={34} />
            <p >office@seyyam.net</p>
          </div>
          <div className={styles.logo}>
            <a href="https://www.instagram.com/seyyam__group/" target="_blank">
              <img src={intagram} alt="" />
            </a>
            <img src={telegram} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;









