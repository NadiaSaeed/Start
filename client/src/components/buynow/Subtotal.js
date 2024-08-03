import React from "react";

function Subtotal() {
  return (
    <div className="sub_item">
      <h3>
        Subtotal items
        <strong style={{ fontWeight: "700", color: "#111" }}>
          {" "}
          Rs.3000.00
        </strong>
      </h3>
    </div>
  );
}

export default Subtotal;
