export const Button = ({ text, children, disabled }) => {

  const buttonText = text ? text : ( children ? children : 'Click me!')
  
  return (
    <button disabled={ disabled }>
      { buttonText }
    </button>
  );
};
