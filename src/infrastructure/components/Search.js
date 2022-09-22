import React from 'react'
import styled from 'styled-components';


export const Search = ({searchTerm, setSearchTerm}) => {  
  
  const handleChange = e => {
    
    setSearchTerm(e.target.value);

  };

  return (
    
    <StyledInput
      type="text"
      placeholder="Search by brand or model"
      value={searchTerm}
      onChange={handleChange}
    />
    
  )

}

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 0.2rem;
  margin-bottom: 1rem;
`;
