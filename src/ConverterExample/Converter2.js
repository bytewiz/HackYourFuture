import React, { Component } from "react";
import NumberInput from "../components/NumberInput";
import { toCelsius, toFahrenheit, tryConvert } from "../helper";
import { TEMPERATURE_SCALES } from "../constants";

export default class ConverterContainer extends Component {
  state = {
    temperature: "",
    scale: TEMPERATURE_SCALES.celsius
  };

  handleInputChange = e => {
    this.setState({
      scale: e.target.name,
      temperature: e.target.value
    });
  };

  render() {
    const { scale, temperature } = this.state;
    const celsius =
      scale === TEMPERATURE_SCALES.fahrenheit
        ? tryConvert(temperature, toCelsius)
        : temperature;
    const fahrenheit =
      scale === TEMPERATURE_SCALES.celsius
        ? tryConvert(temperature, toFahrenheit)
        : temperature;
    return (
      <div>
        <div>
          <NumberInput
            name={TEMPERATURE_SCALES.fahrenheit}
            value={fahrenheit}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <NumberInput
            name={TEMPERATURE_SCALES.celsius}
            value={celsius}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

// handleCelsiusChange = e => {
//   this.setState({
//     scale: TEMPERATURE_SCALES.celsius,
//     temperature: e.target.value
//   });
// };

// handleFahrenheitChange = e => {
//   this.setState({
//     scale: TEMPERATURE_SCALES.fahrenheit,
//     temperature: e.target.value
//   });
// };
