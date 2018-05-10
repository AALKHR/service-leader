import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="Calendar">
        <small>
          <span>Dates</span>
        </small>
        <div className="CalendarWidget">
          <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); this.props.dateRange(startDate, endDate)}}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
            />
        </div>
        <br></br>
      </div>
    )
  }
}

export default Calendar;