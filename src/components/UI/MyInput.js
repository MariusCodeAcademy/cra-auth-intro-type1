function MyInput({ type, placeholder }) {
  return (
    <div class='form-group'>
      <input type={type} className='form-control' placeholder={placeholder} />
    </div>
  );
}

export default MyInput;
