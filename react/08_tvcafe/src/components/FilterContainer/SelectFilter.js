import React from 'react'
import styled from 'styled-components'

import { colors } from '../GlobalStyles'

const SelectFilter = ({ list, label, optionHandler }) => {
	return (
		<StyledSelectFilter>
			<label htmlFor={label}>{label}</label>
			<select
				name={label}
				id={label}
				onChange={(e) => optionHandler(e.target.name, e.target.value)}>
				{list.map((element, index) => (
					<option value={element} id={element} key={index}>
						{element}
					</option>
				))}
			</select>
		</StyledSelectFilter>
	)
}

const StyledSelectFilter = styled.div`
	display: flex;
	flex-direction: column;

	label {
		font-size: 0.9rem;
		font-weight: 300;
		text-transform: capitalize;
	}

	select {
		width: 200px;
		outline: none;
		padding: 0.2em 0.4em;
		margin-top: 0.4em;
		background: ${colors.bgBodyColor};
		border-radius: 4px;
		border-color: ${colors.bgNavColor};

		&::-webkit-scrollbar {
			width: 0.5rem;
		}

		&::-webkit-scrollbar-track {
			background-color: ${colors.textColor};
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${colors.bgNavColor};
		}

		&:active,
		&:focus {
			border-color: ${colors.textColor};
		}
	}

	@media screen and (max-width: 1024px) {
		select {
			margin-bottom: 1.5em;
		}
	}
`

export default SelectFilter
