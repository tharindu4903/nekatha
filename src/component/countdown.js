import React, { Component } from 'react';

import moment, { duration } from "moment";

import Typography from '@material-ui/core/Typography';
import '../App.css';

class countdown extends Component {


  state = {
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,


  };

  addZeros = value => {
    value = String(value);
    while (value.length < 2) {
      value = `0${value}`;
    }
    return value;
  };

  setCountdown = () => {
    const futureDate = moment(this.props.futureDate);

    const today = moment();

    const clockDuration = duration(futureDate.diff(today));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();

    this.setState({
      days,
      hours,
      mins,
      secs
    });

  };
  componentDidMount() {
    this.setCountdown();
    this.interval = setInterval(() => {
      this.setCountdown();
    }, 1000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);


  }


  render() {


    return (

      <div id style={{ display: this.state.secs > 0 ? "block" : "none" }}  >
        <Typography className={'cardh'} >
          පැය {this.addZeros(this.state.hours)} විනාඩි {this.addZeros(this.state.mins)} තත්.{this.addZeros(this.state.secs)}

        </Typography>

      </div>

    );

  }

}


export default countdown;
