import React, { PureComponent } from 'react'
import StudentCard from './card'
import { connect } from 'react-redux'
import { fetchAllStudents } from '../actions/fetchStudents'
import './index.css'

class StudentIndex extends PureComponent {
  componentWillMount() {
    this.props.fetchAllStudents()
  }

  renderStudentDetails(students) {
    return students.map(student => (
      <StudentCard student={ student } key={ student.id } className="student"/>
    ))
  }

  render() {
    const { students } = this.props

    if (!students) return null

    return (
      <div className="index">
        <div className="cards">
          {this.renderStudentDetails(students)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, { fetchAllStudents })(StudentIndex)
