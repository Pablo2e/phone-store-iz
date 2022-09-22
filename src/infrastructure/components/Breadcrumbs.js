import { Link  } from 'react-router-dom';

import styled from 'styled-components';



export const BreadCrumbs = ({ item }) => {     

  if (!item) {

    return (

      <StyledBreadCrumbs>

        <span>

          <b>Home</b>

        </span>

      </StyledBreadCrumbs>

    );

  } else {
    

    return (
  
      <StyledBreadCrumbs>
  
        { item && (
  
          <>
  
            <Link to='/'>
              <span>Home</span>
            </Link>
  
            <span className='separator'>⯈</span>
  
            <span>
              <b>
                { item.brand } { item.model }
              </b>
            </span>
  
          </>
        )
        }
  
      </StyledBreadCrumbs>
      
    );
  }


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
