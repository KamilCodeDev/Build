import { useTranslation } from 'react-i18next';  // Translation hook
import { useCollection } from "./hook/useCollection";
import style from "./Collection.module.scss";

export default function SimpleGallery() {
  const { t } = useTranslation();  // Translation function

  // Получение данных коллекции
  const { data: collection } = useCollection();
  

  return (
    <div id="Collection" className={style.wrapper}>
      <div className={style.container} style={{ textAlign: 'center' }}>
        <h1 >{t("gallery")}</h1>

        {/* Flexbox для фотографий */}
        <div className={style.gallery} >
          {collection?.slice(0, 6).map((collectionItem) => (
            <div key={collectionItem.id} className={style.imgWrapper} >
              <img
                className={style.img}
                src={collectionItem.img}
                alt={collectionItem.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
