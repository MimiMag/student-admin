import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { fetchAllBatches } from '../actions/fetchBatches'
import { selectBatchId } from '../actions/selectBatchId'

const ITEM_HEIGHT = 48;

class Dropdown extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (batchId) => {
    this.setState({ anchorEl: null })
    this.props.selectBatchId(batchId)
  };

  options = (batches) => {
    return batches.map(batch => ({id: batch.id, option: `Batch ${batch.number}`}))
  }

  render() {
    const { batches } = this.props
    const { anchorEl } = this.state;

    if (!batches) return null
    
    return (
      <div>
        <Button
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
          Choose a Class
        </Button>
        
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 300,
            },
          }}
        >
          {this.options(batches).map(batch => (
            <MenuItem key={batch.id} selected={batch === 'Batch 1'} onClick={() => {this.handleClose(batch.id)}}>
              {batch.option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, { fetchAllBatches, selectBatchId })(Dropdown)
