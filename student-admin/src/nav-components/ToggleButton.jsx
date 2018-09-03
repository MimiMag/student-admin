import React from 'react'
import './ToggleButton.css'

export default class ToggleButton extends React.PureComponent {

  render() {
    return(
      <div className='toggle'>
        <p className='label'>{this.props.labelLeft}</p>
        <label class="switch">
          <input type="checkbox"/>
            <span class="slider round" onClick={this.props.toggleView}></span>
        </label>
        <p className='label'>{this.props.labelRight}</p>
      </div>
    )
  }
}
