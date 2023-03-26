function Button({ color, children }) {
  const styles = {
    padding: '0.5rem 0',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: color ? color : '#3182ce',
    width: '100%',
    borderRadius: '4px',
  };

  return <button style={styles}>{children}</button>;
}

export default Button;
