const Button = ({ text, bg, textColor,classes }) => {
    return (
        <button className={`${bg} ${textColor} px-6 py-3 rounded-md ${classes}`}>{text}</button>
    )
}
export default Button