import styles from './WeekOne.module.scss';
import { useState } from 'react';
import { Demo1, Demo2, Demo3 } from './Demo';
import { demo1Code } from './Demo';
import ViewCodeButton from '../../../components/ViewCodeButton';

const WeekOne = () => {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.weekone}>
            <div>
                <Demo1 />
                <ViewCodeButton onClick={() => setShow(!show)}/>
                <pre style={{ display: show ? 'block' : 'none' }}>
                    <code>{demo1Code}</code>
                </pre>
            </div>
            {/* <Demo2 /> */}
            {/* <Demo3 /> */}
        </div>
    );
};

export default WeekOne;
