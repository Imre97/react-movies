import './button.scss'

const Button = (props) => {
    return(
        <button onClick={props.onClick ? props.onClick : null} className={`btn ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button

export const OutlineButton = (props) => {
    return (
        <Button onClick={props.onClick ? props.onClick : null} className={`outline-btn ${props.className}`}>
            {props.children}
        </Button>
    )
}
