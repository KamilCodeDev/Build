import { useTranslation } from 'react-i18next';  // Translation hook
import { useCollection } from "./hook/useCollection";
import style from "./Collection.module.scss";

export default function SimpleGallery() {
  const { t } = useTranslation();  // Translation function

  // Получение данных коллекции
  const { data: collection } = useCollection();
  

  return (
    <div data-aos="fade-up" id="Collection" className={style.wrapper} style={{ padding: '140px' }}>
      <div className={style.container} style={{ textAlign: 'center' }}>
        <h1 >{t("галерея")}</h1>

        {/* Flexbox для фотографий */}
        <div className={style.gallery} >
          {collection?.slice(0, 6).map((collectionItem) => (
            <div key={collectionItem.id} className={style.imgWrapper} >
              <img
                className={style.img}
                src={collectionItem.img}
                alt={collectionItem.title}
                style={{ width: '400px', borderRadius: '4px' }} // Используйте 100% ширины для адаптации
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
