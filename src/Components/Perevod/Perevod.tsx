import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'https://back-texnoprom.uz/'; // Замените на свой API ключ

//@ts-ignore
const Translator: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [translatedText, setTranslatedText] = useState<string>('');
    const [targetLang, setTargetLang] = useState<string>('en');

    const handleTranslate = async () => {
        try {
            const response = await axios.post(
                `https://translation.googleapis.com/language/translate/v2`,
                {},
                {
                    params: {
                        q: text,
                        target: targetLang,
                        key: API_KEY,
                    },
                }
            );
            const translation = response.data.data.translations[0].translatedText;
            setTranslatedText(translation);
        } catch (error) {
            console.error('Ошибка при переводе:', error);
        }
    };
    return (
        <div>
            <h1>Переводчик</h1>
            <textarea
                rows={4}
                cols={50}
                placeholder="Введите текст для перевода"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div>
                <label htmlFor="lang-select">Выберите язык перевода: </label>
                <select
                    id="lang-select"
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}>
                    <option value="en">Английский</option>
                    <option value="es">Испанский</option>
                    <option value="fr">Французский</option>
                    <option value="de">Немецкий</option>
                    <option value="ru">Русский</option>
                </select>
            </div>
            <button onClick={handleTranslate}>Перевести</button>
            <h2>Переведённый текст:</h2>
            <p>{translatedText}</p>
        </div>
    );
};


