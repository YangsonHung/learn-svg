import { useRef, useEffect } from 'react';

const Demo2 = () => {
    const ref = useRef(null);

    useEffect(() => {
        // console.log('ref.current :>> ', ref.current);
    }, []);

    return (
        <div>
            <img
                ref={ref}
                id="img"
                width="200"
                src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"
                alt=""
            />
        </div>
    );
};

export default Demo2;
