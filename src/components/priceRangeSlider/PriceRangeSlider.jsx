import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const PriceRangeSlider = ({setPriceRange}) => {

// Our States
const [value, setValue] = useState([2,5500000]);

// Changing State when volume increases/decreases
const rangeSelector = (event, newValue) => {
	setValue(newValue);
    setPriceRange(newValue)
};

return (
	<div style={{
	margin: 'auto',
	display: 'block',
	width: 'fit-content'
	}}>
	<h3>How to create Price Range Selector in ReactJS?</h3>
	<Typography id="range-slider" gutterBottom>
		Select Price Range:
	</Typography>
	<Slider
		value={value}
		onChange={rangeSelector}
		valueLabelDisplay="auto"
        min={0}
        max={5500000}
	/>
	Your range of Price is between {value[0]} /- and {value[1]} /-
	</div>
);
}

export default PriceRangeSlider;
