import React from "react";

export default function Label(props) {
  const { someLabel } = props;
  return (
    <div>
      <label htmlFor="" className="text-sm text-gray-600">
        {someLabel}
      </label>
    </div>
  );
}
