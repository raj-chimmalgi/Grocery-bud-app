import { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className={"single-item"}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>
      <button className={"btn remove-btn"} onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
