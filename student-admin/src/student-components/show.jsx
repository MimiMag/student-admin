import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchStudent } from '../actions/fetchStudents'
import StudentCard from './card'

class StudentShow extends PureComponent {

  componentWillMount(props) {
    this.props.fetchStudent(this.props.match.params.id)
  }
  
  render() {
    const { student } = this.props
    if (!student) return null
    return (
      <div>
        <StudentCard student={student} className="student" />
      </div> 
    )
  }
}

const mapStateToProps = ({ student }) => ({ student })

export default connect(mapStateToProps, { fetchStudent })(StudentShow)
