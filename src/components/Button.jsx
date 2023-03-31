const Button = ({ value, onClick }) => {
  const specialOp = {
    "0": "Zero",
    "+": "Addition",
    "=": "Equals",
    "/": "Division",
    "*": "Multiplication",
    "-": "Subtraction",
    ".": "Dot"
  }
  return (
    <button className={specialOp[value] ? `card__button${specialOp[value]}` : `card__button${value}`}  onClick={ onClick }>{ value }</button>
  )
}
export default Button