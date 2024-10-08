import { useTranslation } from "react-i18next";  // Импорт хука для перевода
import style from "./Galery.module.scss";

import { useGalery, IGalery } from "./hook/useGalery";  // Импорт интерфейса IGalery

const Gallery = () => {
    const { i18n, t } = useTranslation();  // Используем хук для перевода
    const { data: galery } = useGalery();

    // Функция для отображения заголовка галереи в зависимости от текущего языка
    const renderTitle = (galeryItem: IGalery) => {
        switch (i18n.language) {
            case 'ru':
                return galeryItem.title_ru;
            case 'uz':
                return galeryItem.title_uz;
            case 'en':
            default:
                return galeryItem.title_en;
        }
    };

    return (
        <div id="Project">
            <div className={style.galleryContainer}>
                <h1>{t("projects")}</h1>  {/* Перевод заголовка "Проекты" */}
                <div className={style.gridContainer}>
                    {galery?.map((galeryItem) => (
                        <div className={style.gridItem} key={galeryItem.id}>
                            <div className={style.imageWrapper}>
                                <img src={galeryItem.img} alt="" className={style.image} />
                                <div className={style.overlay}>
                                    <div className={style.text}>
                                        <h1>{renderTitle(galeryItem)}</h1>  {/* Отображение заголовка в зависимости от языка */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
