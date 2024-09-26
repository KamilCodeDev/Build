import styles from './Service.module.scss'
import { useService } from "./hook/useService";

const Service = () => {
    // Вызов useService должен находиться внутри компонента
    const { data: service } = useService();
    console.log(service);

    return (
        <div id='Service'>
            <div className={styles.service}>
                <h1>УСЛУГИ</h1>
                <div className={styles.container}>
                    {service?.map((serviceItem) => (
                        <div key={serviceItem.id} className={styles.card}>
                            <img className={styles.img} src={serviceItem.img} alt="" />
                            <div className={styles.text}>
                                <h1>{serviceItem.title}</h1>
                                <p>{serviceItem.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;

