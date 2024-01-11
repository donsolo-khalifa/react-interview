import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelect(id) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(id);
    findIndexOfCurrentId === -1
      ? cpyMutiple.push(id)
      : cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }
  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordian">
        <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
          {" "}
          Enable Multiple select{" "}
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelect(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>-</span>
              </div>
              {enableMultiSelect
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
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
