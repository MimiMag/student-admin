import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './card.css'

class StudentCard extends PureComponent {
  renderBatchNumber(student) {
    if (!student.batch) return null
    return(
      <h4> Batch { student.batch.number }</h4 >
    )
  }
  render() {
    const { student } = this.props
    return (
      <div className="card">
        <img className="avatar" src={student.pictureUrl} alt={`avatar ${student.firstName}`} />
        <div className="container">
          <Link to={`/students/${student.id}`} className="link">
            <h2>{student.firstName} {student.lastName}</h2>
            {this.renderBatchNumber(student)}
          </Link>
        </div>
      </div>
    )
  }
}

export default StudentCard
