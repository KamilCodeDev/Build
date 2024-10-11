import { FormEvent, useState } from 'react';
import style from './Footer.module.scss';

import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Contact from '../Contact/Contact';

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const fields = Object.fromEntries(formData);

    const url = `https://api.telegram.org/bot${
      import.meta.env.VITE_BOT_TOKEN
    }/sendMessage`;
    const payload = {
      chat_id: import.meta.env.VITE_CHAT_ID,
      text: `<b>Имя:</b> <i>${fields.name}</i>\n<strong>Номер:</strong> <i>${fields.number}</i>`,
      parse_mode: 'HTML',
    };

    await axios.post(url, payload);
    setIsLoading(false);
    alert('Заявка успешно отправлена');
  };

  return (
    <div data-aos='fade-up'>
      <div className={style.container}>
        <div className={style.map}>
          <iframe
            id='Fotter'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11990.087432143182!2d69.2153541!3d41.2975096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b004c115c99%3A0x2cfd57386d564703!2sSeyyam%20Group!5e0!3m2!1sru!2s!4v1727351700025!5m2!1sru!2s'
            width='100%'
            height='550'
            style={{ border: '0' }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className={style.footer}>
          <Contact />
          <form
            data-aos='fade-up'
            className={style.form}
            onSubmit={handleSubmit}
          >
            <h3 className={style.heading}>{t('form.heading')}</h3>
            <div className={style.row}>
              <label htmlFor='name'>
                <h2>{t('form.name')}</h2>
                <input type='text' id='name' name='name' required />
              </label>
            </div>
            <label htmlFor='number'>
              <h2>{t('form.contact')}</h2>
              <input type='number' id='number' name='number' required />
            </label>
            <button type='submit'>{isLoading ? '...' : t('form.send')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
