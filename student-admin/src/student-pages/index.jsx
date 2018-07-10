import React, { PureComponent } from 'react'
import StudentShow from './show'
import { connect } from 'react-redux'
import { fetchAllStudents } from '../actions/fetchStudents'

class StudentIndex extends PureComponent {
  componentWillMount() {
    this.props.fetchAllStudents()
  }

  render() {
    return (
      <div>
        <h1>I am the index page</h1>
        <StudentShow />
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, { fetchAllStudents })(StudentIndex)
