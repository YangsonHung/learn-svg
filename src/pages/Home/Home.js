import styles from './Home.module.scss';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { changeDocumentTitle } from '../../utils';
import WeekOne from './WeekOne';

export default function Home() {
    useEffect(() => {
        changeDocumentTitle();
        hljs.highlightAll();
    }, []);

    return (
        <div className={styles.home}>
            <WeekOne />
        </div>
    );
}
