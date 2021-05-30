import styles from './ViewCodeButton.module.scss';

const ViewCodeButton = (props) => {
    const { onClick } = props;

    return (
        <div className={styles.viewCodeButton} onClick={onClick}>
            VIEW CODE
        </div>
    );
};

export default ViewCodeButton;
