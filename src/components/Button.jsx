const Button = ({ text,classes }) => {
    return (
        <button className={`px-6 py-3 rounded-md ${classes}`}>{text}</button>
    )
}
export default Button