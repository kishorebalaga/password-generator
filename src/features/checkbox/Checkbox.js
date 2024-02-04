import "../checkbox/index.css";

const CheckBox = ({ name, onChange, checked, id }) => {
  return (
    <div className="checkbox-wrapper flex flex-row justify-between w-full items-center mb-2">
      <div>{name}</div>
      <div>
        <input type="checkbox" onChange={onChange} checked={checked} id={id} />
      </div>
    </div>
  );
};
export default CheckBox;
