import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const personName = 'Sarah Williams'
    const initial = personName.slice(0, 1)

    return (
      <div className="main-container">
        <div className="Balance-card">
          <div className="name-container">
            <h1 className="heading-circle">{initial}</h1>
            <span className="name">{personName}</span>
          </div>
          <div className="view-Balance-container">
            <p className="View-balance-Para">Your Balance</p>
            <div className="money-count-container">
              <p className="money">{balance}</p>
              <p className="In-rupees-para">In Rupees</p>
            </div>
          </div>
          <div className="Withdraw-container">
            <p className="Withdraw"> Withdraw</p>
            <p className="choose-span">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="button-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                money={eachItem}
                key={eachItem.id}
                onBalanceButton={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
