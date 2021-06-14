import styles from './Home.module.scss';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { changeDocumentTitle } from '../../utils';
import Demo from './Demo';

export default function Home() {
    useEffect(() => {
        changeDocumentTitle();
        hljs.highlightAll();
    }, []);

    return (
        <div className={styles.home}>
            <Demo />
        </div>
    );
}
