import React from "react";

function CommanForm({ formControl }) {
  function renderInputByComponentType(getControlItem) {
   

  }
  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControl.map((controlItem) => (
          <div className="grid w-full gap-1.5">
            {" "}
            key ={controlItem.name}
            <Label className="mb-1">{controlItem.Label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>
    </form>
  );
}

export default CommanForm;
