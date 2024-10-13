// Импортируем нужные зависимости
import styles from './Service.module.scss';
import { useTranslation } from 'react-i18next';  // Добавляем useTranslation для перевода
import { useService, ISevice } from "./hook/useService";
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
import Serv from './Serv';

const Service = () => {

    useEffect(() => {
        Aos.init({
            duration: 500,
            easing: 'ease-in-out',
        });
    }, []);

    // Вызов useService должен находиться внутри компонента
    const { data: service } = useService();
    const { i18n } = useTranslation();  // Подключаем хук useTranslation

    // Функция для отображения заголовка в зависимости от текущего языка
    const renderTitle = (serviceItem: ISevice) => {
        switch (i18n.language) {
            case 'ru':
                return serviceItem.title_ru;
            case 'uz':
                return serviceItem.title_uz;
            case 'en':
            default:
                return serviceItem.title_en;
        }
    };

    // Функция для отображения описания услуги в зависимости от текущего языка
    const renderDescription = (serviceItem: ISevice) => {
        let description = '';
        switch (i18n.language) {
            case 'ru':
                description = serviceItem.description_ru;
                break;
            case 'uz':
                description = serviceItem.description_uz;
                break;
            case 'en':
            default:
                description = serviceItem.description_en;
        }

        // Заменяем символы переноса строки на тег <br/>
        return description.replace(/\r\n|\r|\n/g, '<br/>');
    };

    return (
        <div data-aos="fade-up">
            <div >
                <Serv/>
                <div>
                    <div className={styles.service}>
                        <h1 className={styles.heading}>{i18n.t('services')}</h1> {/* Перевод заголовка "Услуги" */}
                        <div className={styles.container}>
                            {service?.map((serviceItem) => (
                                <div key={serviceItem.id} className={styles.card}>
                                    <img className={styles.img} src={serviceItem.img} alt="" />
                                    <div className={styles.text}>
                                        <h2>{renderTitle(serviceItem)}</h2>
                                        {/* Отображение заголовка услуги */}
                                        <p dangerouslySetInnerHTML={{ __html: renderDescription(serviceItem) }} />  {/* Отображение описания услуги */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
