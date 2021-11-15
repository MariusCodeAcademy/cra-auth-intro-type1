function MyInput({ type, placeholder, value, setValue }) {
  return (
    <div class='form-group'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        className='form-control'
        placeholder={placeholder}
      />
    </div>
  );
}

export default MyInput;
