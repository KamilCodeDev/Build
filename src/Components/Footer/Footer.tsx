import { FormEvent, useState } from "react"
import style from "./Footer.module.scss"

import axios from "axios"

import Container from "../Container/Container"

const Footer = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);

        const formData = new FormData(event.target as HTMLFormElement);
        const fields = Object.fromEntries(formData);

        const url = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`;
        const payload = {
            chat_id: import.meta.env.VITE_CHAT_ID,
            text: `<b>Имя:</b> <i>${fields.name}</i>\n<b>Фамилия:</b> <i>${fields.surname}</i>\n<strong>Почта:</strong> <i>${fields.email}</i>\n<b>Сообщение:</b> <i>${fields.message}</i>`,
            parse_mode: "HTML",
        };

        await axios.post(url, payload);
        setIsLoading(false);
        alert("Заявка успешно отправлена");
    };
    
    return (
        <div className={style.container}>
            <div className={style.footer}>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1498.4603699410736!2d69.2802796582705!3d41.31058784274514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1726298273320!5m2!1sru!2s" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.row}>    
                        <label htmlFor="name">
                            First Name
                            <input type="text" id="name" name="name" required />
                        </label>
                        <label htmlFor="surname">
                            Last Name
                            <input type="text" id="surname" name="surname" required />
                        </label>
                    </div>
                    <label htmlFor="email">
                        Email
                        <input type="email" id="email" name="email" required />
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea name="message" id="message" required></textarea>
                    </label>
                    <button type="submit">{isLoading ? "..." : "Send"}</button>
                </form>
            </div>
        </div>
    )
}

export default Footer