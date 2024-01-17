import {Component} from 'react'
import './index.css'
class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevestate => ({speed: prevestate.speed + 10}))
  }
  applyBrake = () => {
    if (this.state.speed === 0) this.setState({state: 0})
    else this.setState(prevestate => ({speed: prevestate.speed - 10}))
  }
  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="speedometere-title">SPEEDOMETER</h1>
        <img
          className="speedo-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="dashboard-title">Speed is {speed}mph</h1>
        <p className="dashboard-control-title">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            className="btn btn-primary Control-button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            className="btn btn-outline-dark Control-button"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
