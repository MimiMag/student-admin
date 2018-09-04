import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css'

export default class Chart extends React.PureComponent {
  data = {
    labels: ['Starting Point', ...this.props.labels],
    datasets: [
      {
        label: this.props.dataset,
        fill: false,
        lineTension: 0.2,
        backgroundColor: '#448D76',
        borderColor: '#448D76',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#093426',
        pointBackgroundColor: '#CBE432',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#F3F7D4',
        pointHoverBorderColor: '#CBE432',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100, ...this.props.data]
      }
    ]
  }

  render() {
    console.log(this.props.labels)
    return (
      <div className='lineChart'>
        <h2>{this.props.title}</h2>
        <Line data={this.data}/>
      </div>
    );
  }
}
