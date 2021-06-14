import styles from './Demo.module.scss';
import { useState } from 'react';
import { Demo1, DemoCode1, Demo2, DemoCode2, Demo3, DemoCode3, Demo4, DemoCode4 } from './Demos';
import ViewCodeButton from '../../../components/ViewCodeButton';
import Code from '../../../components/Code';

const WeekOne = () => {
    const [show, setShow] = useState({
        demo1: false,
        demo2: false,
        demo3: false,
        demo4: false,
    });

    return (
        <div className={styles.weekone}>
            <div id="demo1" className={styles.demoWrapper}>
                <Demo1 />
                <ViewCodeButton onClick={() => setShow({ ...show, demo1: !show.demo1 })} />
                <Code show={show.demo1} code={DemoCode1} />
            </div>
            <div id="demo2" className={styles.demoWrapper}>
                <Demo2 />
                <ViewCodeButton onClick={() => setShow({ ...show, demo2: !show.demo2 })} />
                <Code show={show.demo2} code={DemoCode2} />
            </div>
            <div id="demo3" className={styles.demoWrapper}>
                <Demo3 />
                <ViewCodeButton onClick={() => setShow({ ...show, demo3: !show.demo3 })} />
                <Code show={show.demo3} code={DemoCode3} />
            </div>
            <div id="demo4" className={styles.demoWrapper}>
                <Demo4 />
                <ViewCodeButton onClick={() => setShow({ ...show, demo4: !show.demo4 })} />
                <Code show={show.demo4} code={DemoCode4} />
            </div>
        </div>
    );
};

export default WeekOne;
