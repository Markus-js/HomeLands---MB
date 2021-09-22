import React from 'react'

export const SelectHousingType = ({setHousingType}) => {

    function handleSelectChange(value) {
        setHousingType(value);
      }

    return (
            <select
        onChange={(e) => {
          handleSelectChange(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="villa">Villa</option>
        <option value="villalejlighed">Villalejlighed</option>
        <option value="ejerlejlighed">Ejerlejlighed</option>
        <option value="andelsbolig">Andelsbolig</option>
      </select>
    )
}
