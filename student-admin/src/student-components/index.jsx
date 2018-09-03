import React, { PureComponent } from 'react'
import StudentCard from './Card'
import { connect } from 'react-redux'
import { fetchAllStudents } from '../actions/fetchStudents'
import './index.css'
import NavBar from '../nav-components/Navbar';

class StudentIndex extends PureComponent {
  state = { viewStudents: true }

  componentWillMount() {
    this.props.fetchAllStudents()
  }

  toggleView() {
    this.setState({ viewStudents: !this.state.viewStudents })
  }

  renderStudentDetails(students) {
    if (this.props.selectedBatchId === 'All'){
      return students.map(s => (
        <StudentCard student={s} key={s.id} className="student" />
      ))
    }

    return students
      .filter(s => s.batch && `${s.batch.id}` === this.props.selectedBatchId)
      .map(s => (
        <StudentCard student={s} key={s.id} className="student" />
      ))

  }

  renderStudentsOrResults(students) {
    if(this.state.viewStudents) return(
      <div className="cards">
        {this.renderStudentDetails(students)}
      </div>
    )
    return <p className="results">Todo: Results</p>
  }

  render() {
    const { students, selectedBatchId } = this.props

    if (!students || !selectedBatchId) return null
    
    return (
      <div className="index">
        <NavBar toggleView={ () => {this.toggleView()} }/>
        { this.renderStudentsOrResults(students)}
      </div>
    )
  }
}

const mapStateToProps = ({ students, selectedBatchId }) => ({ students, selectedBatchId })

export default connect(mapStateToProps, { fetchAllStudents })(StudentIndex)
