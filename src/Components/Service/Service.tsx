import styles from './Service.module.scss'
import img2 from '../../Assets/img2.webp'
const Service = () => {
    return (
        <div>
            <div className={styles.service}>
                <h1>УСЛУГИ</h1>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <img className={styles.img} src={img2} alt="" />
                        <div className={styles.text}>
                            <h1>Планирование строительства</h1>
                            <p>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.img} src={img2} alt="" />
                        <div className={styles.text}>
                            <h1>Планирование строительства</h1>
                            <p>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.img} src={img2} alt="" />
                        <div className={styles.text}>
                            <h1>Планирование строительства</h1>
                            <p>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Service