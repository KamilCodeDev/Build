import { useContact } from "./hook/useContact";
import styles from "./Contact.module.scss";
// import { PiPhoneCall } from 'react-icons/pi';
// import { MdOutlineMailOutline } from 'react-icons/md';
import { useTranslation } from "react-i18next";
import Telegram from "../../assets/telegram.png";
import { FaInstagram } from "react-icons/fa6";
import facebook from "../../assets/facebook (2).png";
import email from "../../assets/email (2).png";
import call from "../../assets/calling.png";
const Contact = () => {
  const { data: contact } = useContact();
  const { t } = useTranslation();
  console.log(contact);

  return (
    <div id="Contact" data-aos="fade-up" className={styles.wrapper}>
      <h1 className={styles.heading}>{t("contacts")}</h1>
      <div className={styles.contactCard}>
        {contact?.map((contact) => (
          <div key={contact.id} className={styles.contactWrapper}>
            <div>
              <img
                src={call}
                style={{ width: "30px", height: "30px" }}
                alt=""
              />
              <a
                href={`tel:${contact.first_contact}`}
                className={styles.contactItem}
              >
                {contact.first_contact}
              </a>
            </div>
          </div>
        ))}
        <div className={styles.info}>
          <div className={styles.email}>
            <img src={email} style={{ width: "30px", height: "30px" }} alt="" />
            <a href="mailto:office@seyyam.net">office@seyyam.net</a>
          </div>
          <div className={styles.logo}>
            <a href="https://www.instagram.com/seyyam__group/" target="_blank">
              <FaInstagram size={32} />
            </a>
            <a href="https://t.me/seyyamgroup">
              <img src={Telegram} alt="" />
            </a>
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
