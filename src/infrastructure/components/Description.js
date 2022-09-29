import styled from 'styled-components';


export const Description = ({ product }) => {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    battery,
    primaryCamera,
    secondaryCmera,
    displayResolution,
    dimentions,
    weight
  } = { ...product };

  return (

    <StyledDescription>

      <div className='item'>
        <span><b>Brand: </b>{ brand }</span>
      </div>

      <div className='item'>
        <span><b>Model: </b>{ model }</span>
      </div>

      <div className='item'>
        <span><b>Price €: </b>{ price }</span>
      </div>

      <div className='item'>
        <span><b>CPU: </b>{ cpu }</span>
      </div>

      <div className='item'>
        <span><b>Ram: </b>{ ram }</span>
      </div>

      <div className='item'>
        <span><b>Operative Sistem: </b>{ os }</span>
      </div>

      <div className='item'>
        <span><b>Display Resolution: </b>{ displayResolution }</span>
      </div>

      <div className='item'>
        <span><b>Battery: </b>{ battery }</span>
      </div>
      
      <div className='item'>
        <span><b>Primary Camera: </b>{ primaryCamera }</span>
      </div>    

      {
        secondaryCmera && (
          <div className='item'>
            <span><b>Secondary Camera: </b>{ secondaryCmera }</span>
          </div>
        )
      }           
      
      <div className='item'>
        <span><b>Dimentions: </b>{ dimentions }</span>
      </div>

      <div className='item'>
        <span><b>Weight: </b>{ weight }gr</span>
      </div>

    </StyledDescription>

  );

};

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  & > .item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

`;
