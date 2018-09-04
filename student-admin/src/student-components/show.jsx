import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchStudent } from '../actions/fetchStudents'
import { fetchAllHomework } from '../actions/fetchHomeWork'
import StudentCard from './Card'
import LineChart from './Chart'

class StudentShow extends PureComponent {

  componentWillMount(props) {
    const { homework } = this.props

    this.props.fetchStudent(this.props.match.params.id)
    if (homework.length === 0 ) this.props.fetchAllHomework()

  }

  renderLineChart(labels, scores) {
    return(
      <LineChart 
        title='Homework'
        labels={labels} 
        dataset='Homework'
        data={scores}
      />
    )
  }
  
  render() {
    const { student, homework } = this.props
    if (!student || !homework) return null
    const labels = homework.map(hw => hw.title)
    const scores = student.assignments.map( a => (a.score / a.homework.totalScore * 100))
    return (
      <div>
        <StudentCard student={student} className="student" />
        {this.renderLineChart(labels, scores)}
      </div> 
    )
  }
}

const mapStateToProps = ({ student, homework }) => ({ student, homework })

export default connect(mapStateToProps, { fetchStudent, fetchAllHomework })(StudentShow)
