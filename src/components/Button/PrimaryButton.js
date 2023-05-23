const PrimaryButton = ({ children, className = "", ...rest }) => {
    return (
        <button className={`primary-button ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default PrimaryButton;
