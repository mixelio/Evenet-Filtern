// import React from 'react'
import Select from 'react-select'
import './FilterSelection.module.scss'
import React from 'react'

const options = [
  { value: 'pop', label: 'Pop' },
  { value: 'metal', label: 'Metal' },
  { value: 'theater', label: 'Theater' },
  { value: 'ambiant', label: 'Ambiant' },
]

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: "50px",
    borderColor: state.isFocused ? "#3F6251" : "#CBD0D3",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#3F6251",
    }
  }),
  option: (provided) => ({
    ...provided,
    
  }),
  menu: (provided) => ({
    ...provided,
    color: "#0D4E32",
    maxHeight: "100px",
    overflow: "auto",
    transitionDuration: "300ms",
  }),
  multiValue: (provide) => ({
    ...provide,
    backgroundColor: "none",
    fontSize: "16px",
    fontWeight: "600",
    "& > div": {
      paddingRight: "1px",
    },
    "& > span": {
      color: "#0D4E32"
    },
    "&:nth-last-child(2) > span": {
      display: "none",
    }
  }),
}

export const FilterSelection = () => {
  return (
    <div className="filterSelection">
      <label 
        className="filterSelection__label" htmlFor='filter-selection__select'
      >
        Kategorien
      </label>

      <Select 
        id='filter-selection__select'
        styles={customStyles}
        components={{
          MultiValueRemove: () => (
            <span>,</span>
          ),
          IndicatorSeparator: () => null,
        }}
        className="filterSelection__select"
        options={options}
        isMulti
        isClearable={false}
      />
    </div>

  )
}