export const Button = ({ text, children, disabled }) => {
  return (
    <button disabled={ disabled }>
      { text ? text : children ? children : 'Click me!' }
    </button>
  );
};
