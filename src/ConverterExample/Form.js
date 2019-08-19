import React, { Component } from "react";
import Title from "../components/Title";
import FormWrapper from "./FormWrapper";
import DateInput from "../components/DateInput";
import TextInput from "../components/TextInput";
import { getTodaysFormattedDate } from "../helper";
class Form extends Component {
  state = {
    date: getTodaysFormattedDate(),
    text: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { date, text } = this.state;
    alert(`${date} ${text}`);
  };
  render() {
    const { date, text } = this.state;
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <Title title={date} />
          <div>
            <TextInput text={text} handleTextChange={this.handleInputChange} />
          </div>
          <div>
            <DateInput date={date} handleDateChange={this.handleInputChange} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </FormWrapper>
    );
  }
}

export default Form;
