// src/components/CustomizationPanel.jsx
import React from 'react';

const CustomizationPanel = ({ setBgColor, setFgColor }) => {
  return (
    <div className="customization-panel">
      <h3>Customize QR Code</h3>
      <label>
        Background Color:
        <input type="color" onChange={(e) => setBgColor(e.target.value)} />
      </label>
      <label>
        Foreground Color:
        <input type="color" onChange={(e) => setFgColor(e.target.value)} />
      </label>
    </div>
  );
};

export default CustomizationPanel;
