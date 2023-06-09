function Button({ padding, bgColor, color, border, children, onClick }) {
  const styles = {
    position: 'relative',
    padding: padding ? padding : '0.5rem 0',
    color: color ? color : 'rgba(255, 255, 255, 0.87)',
    backgroundColor: bgColor ? bgColor : '#1d4ed8',
    width: '100%',
    borderRadius: '4px',
    fontWeight: '600',
    border: border ? '2px solid' : null,
  };

  return (
    <button onClick={onClick} style={styles}>
      {children}
    </button>
  );
}

export default Button;
