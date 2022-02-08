const Button = ({ backgroundColor = '#8C30F5', border = '0', colorText='white', margin='20', handleClick, children, ...rest}) => {

    return (
        <button style={{ backgroundColor, border, color: colorText, margin, }} onClick={handleClick}>{children}</button>
    )
}

export default Button