const Button = (props) => {
    return(
        <button onCLick={props.onCLick ? props.onClick : ''} className={`btn ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button

export const OutlineButton = (props) => {
    return (
        <Button onClick={props.onClick ? props.onClick : ''} className={`outline-btn ${props.className}`}>
            {props.chilren}
        </Button>
    )
}
