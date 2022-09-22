import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";

import styled from 'styled-components';

import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';



export const BreadCrumbs = () => {  

  const { id } = useParams() 

  const [item, setItem] = useState(); 

  const getItem = () => {

    const ItemStored = PersistenceService.get('item') 
    setItem(ItemStored) 

  }

  useEffect(()=>{

    getItem(); 

  },[]) 
    

  if (!id) {

    return (

      <StyledBreadCrumbs>

        <span>

          <b>Home</b>

        </span>

      </StyledBreadCrumbs>

    );

  }

  return (

    <StyledBreadCrumbs>

      <Link to="/">
        <span>Home</span>
      </Link>

      <span className="separator">⯈</span>

      <span>
        <b>
          {item.brand} {item.model}
        </b>
      </span>
    </StyledBreadCrumbs>
  );
};

const StyledBreadCrumbs = styled.div`
  margin-left: 3rem;
  & > .separator {
    color: #000;
    margin: 0 5px;
  }
  & > * {
    display: inline-block;
    color: #666;
    text-decoration: none;
  }
`;
