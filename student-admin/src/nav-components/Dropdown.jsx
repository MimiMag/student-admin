import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

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
    this.props.selectOption(batchId)
  };

  formatOptions = (options) => {
    return options.map(batch => {
      if (batch.id === 0) return {id: batch.id, option: 'All Batches'}
      if (batch.id !== 0) return {id: batch.id, option: `Batch ${batch.number}`}
      return null
    })
  }

  renderOptions = (options) => {
    return this.formatOptions(options).map(batch => (
      <MenuItem key={batch.id} selected={batch === 'Batch 1'} onClick={() => { this.handleClose(batch.id) }}>
        {batch.option}
      </MenuItem>
    ))
  }

  render() {
    const { options } = this.props
    const { anchorEl } = this.state;
    if(!options) return null

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
          {this.renderOptions(options)}
        </Menu>
      </div>
    );
  }
}

export default Dropdown
