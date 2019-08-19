import React, { Component } from "react";
import NumberInput from "../components/NumberInput";
import { toCelsius, toFahrenheit, tryConvert } from "../helper";

export default class ConverterContainer extends Component {
  state = {
    fahrenheit: undefined,
    celsius: undefined
  };

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { fahrenheit, celsius } = this.state;
    const fahrenheitToCelsius = tryConvert(fahrenheit, toCelsius);
    const celsiusToFahrenheit = tryConvert(celsius, toFahrenheit);
    return (
      <div>
        <div>
          <NumberInput
            name="fahrenheit"
            value={fahrenheit}
            onChange={this.handleInputChange}
          />
          <h1>In celsius: {fahrenheitToCelsius}</h1>
        </div>
        <div>
          <NumberInput
            name="celsius"
            value={celsius}
            onChange={this.handleInputChange}
          />
          <h1>In fahrenheit: {celsiusToFahrenheit}</h1>
        </div>
      </div>
    );
  }
}
