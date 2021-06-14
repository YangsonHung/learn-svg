import styles from './Demo.module.scss';
import { useState } from 'react';
import { Demo1, Demo2, Demo3, demo1Code, demo2Code, demo3Code } from './Demos';
import ViewCodeButton from '../../../components/ViewCodeButton';
import Code from '../../../components/Code';

const WeekOne = () => {
    const [show, setShow] = useState({
        demo1: false,
        demo2: false,
        demo3: false,
    });

    return (
        <div className={styles.weekone}>
            <div id="demo1" className={styles.demoWrapper}>
                <Demo1 />
                <ViewCodeButton onClick={() => setShow({ ...show, demo1: !show.demo1 })} />
                <Code show={show.demo1} code={demo1Code} />
            </div>
            <div id="demo2" className={styles.demoWrapper}>
                <Demo2 />
                <ViewCodeButton onClick={() => setShow({ ...show, demo2: !show.demo2 })} />
                <Code show={show.demo2} code={demo2Code} />
            </div>
            <div id="demo3" className={styles.demoWrapper}>
                <Demo3 />
                <ViewCodeButton onClick={() => setShow({ ...show, demo3: !show.demo3 })} />
                <Code show={show.demo3} code={demo3Code} />
            </div>
        </div>
    );
};

export default WeekOne;
