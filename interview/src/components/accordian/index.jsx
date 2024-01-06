import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(id) {
    return console.log(id);
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div  className="title">
                <h3 onClick={()=>handleSingleSelection(item.id)}>{item.question}</h3>
              </div>
            </div>
          ))
        ) : (
          <div> No data</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;



