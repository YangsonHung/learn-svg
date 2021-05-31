const Code = ({ show, code }) => {
    return (
        <pre style={{ display: show ? 'block' : 'none' }}>
            <code>{code}</code>
        </pre>
    );
};

export default Code;
