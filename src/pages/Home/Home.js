import { useEffect } from 'react';
import { changeDocumentTitle } from '../../utils';
import WeekOne from './WeekOne';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default function Home() {
    useEffect(() => {
        changeDocumentTitle();
        hljs.highlightAll();
    }, []);

    return (
        <div>
            <WeekOne />
        </div>
    );
}
