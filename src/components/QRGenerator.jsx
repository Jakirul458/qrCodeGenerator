// src/components/QRGenerator.jsx
import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import DownloadButton from './DownloadButton';

const QRGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#000000');

  return (
    <div className="qr-generator">
      <input
        type="text"
        placeholder="Enter URL or Text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <QRCode value={inputValue} bgColor={bgColor} fgColor={fgColor} />
      <DownloadButton value={inputValue} bgColor={bgColor} fgColor={fgColor} />
    </div>
  );
};

export default QRGenerator;
