import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const PriceRangeSlider = ({setPriceRange}) => {

// Our States
const [value, setValue] = useState([2,5500000]);

// Changing State when volume increases/decreases
const rangeSelector = (event, newValue) => {
	setValue(newValue);
    setPriceRange(newValue)
};

const muiTheme = createTheme({
	overrides:{
	  MuiSlider: {
		thumb:{
		color: "white",
		border: "1px solid #707070"
		},
		track: {
			height: "1px",
		  color: '#707070'
		},
		rail: {
			height: "1px",
		  color: 'grey'
		}
	  }
  }
  });

return (
	<div style={{
	margin: 'auto',
	display: 'block',
	width: '180px'
	}}>
	
	<ThemeProvider theme={muiTheme}>
	<Slider
		value={value}
		onChange={rangeSelector}
        min={0}
        max={5500000}
	/>
	 </ThemeProvider>

	
	</div>
);
}

export default PriceRangeSlider;
