import './index.css'

const DenominationItem = props => {
  const {money, onBalanceButton} = props
  const {value} = money

  const onClickUpdateBalance = () => {
    onBalanceButton(value)
  }

  return (
    <li className="money-list">
      <button type="button" className="button" onClick={onClickUpdateBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
