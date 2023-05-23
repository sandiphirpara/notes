const TextInput = ({ error, className,defaultValue ,...rest }) => {
    return (
        <div className="mb-3 w-100">
            <input
                className={`form-control ${className ? className : ""} ${
                    !!error ? "error-input" : ""
                }`}
                defaultValue
                {...rest}
            />
            {!!error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default TextInput;
