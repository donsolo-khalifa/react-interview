import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                onClick={() => handleSingleSelection(item.id)}
                className="title"
              >
                <h3>{item.question}</h3>
                <span>-</span>
              </div>
              {selected === item.id ? <div className="content">{item.answer}</div> : null}
            </div>
          ))
        ) : (
          <div> No data!</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
