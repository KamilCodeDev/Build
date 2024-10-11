import { useTranslation } from 'react-i18next'; // Translation hook
import { useCollection } from './hook/useCollection';
import style from './Collection.module.scss';

export default function SimpleGallery() {
  const { t } = useTranslation(); // Translation function

  // Получение данных коллекции
  const { data: collection } = useCollection();

  return (
    <section id='Collection' className={style.section}>
      <div className={style.container}>
        <h2>{t('gallery')}</h2>
        <div className={style.gallery}>
          {collection?.slice(0, 6).map((item) => (
            <div key={item.id} className={style.item}>
              <img src={item.img} alt='' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
