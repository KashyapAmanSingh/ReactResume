import React from 'react';

function PrintButton() {
  const handleButtonClick = () => {
    window.print();
  };

  return (
    <button className="btn btn-info text-dark" onClick={handleButtonClick}>
      Print this
    </button>
  );
}

export default PrintButton;
