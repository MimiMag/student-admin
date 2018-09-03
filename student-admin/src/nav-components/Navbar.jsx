import React, { PureComponent } from 'react'
import './Navbar.css'
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import { fetchAllBatches } from '../actions/fetchBatches';
import { selectBatchId } from '../actions/selectBatchId';
import ToggleButton from './ToggleButton'

class NavBar extends PureComponent {

  componentWillMount() {
    this.props.fetchAllBatches()
  }

  render() {
    const { batches } = this.props
    if (!batches) return null

    return(
      <div className='navbar'>
        <h2 className="subtitle">Display Results</h2>
        <ToggleButton labelLeft='View Students' labelRight='View Results' toggleView ={ () => {this.props.toggleView()}}/>
        <h2 className="subtitle">Filter by Batch</h2>
        <Dropdown options={batches.concat({ id: 'All', number: 0 })} selectOption={(option) => { this.props.selectBatchId(option) }} />
        <Dropdown />
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, { fetchAllBatches, selectBatchId })(NavBar)
