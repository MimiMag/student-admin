import React, { PureComponent } from 'react'
import StudentCard from './Card'
import { connect } from 'react-redux'
import { fetchAllStudents } from '../actions/fetchStudents'
import './index.css'
import NavBar from '../nav-components/Navbar';

class StudentIndex extends PureComponent {
  componentWillMount() {
    this.props.fetchAllStudents()
  }

  renderStudentDetails(students) {
    return students
      .filter(s => s.batch && s.batch.id == this.props.selectedBatchId)
      .map(s => (
        <StudentCard student={s} key={s.id} className="student" />
      ))
  }

  render() {
    const { students } = this.props

    if (!students) return null

    return (
      <div className="index">
        <NavBar />
        <div className="cards">
          {this.renderStudentDetails(students)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ students, selectedBatchId }) => ({ students, selectedBatchId })

export default connect(mapStateToProps, { fetchAllStudents })(StudentIndex)
