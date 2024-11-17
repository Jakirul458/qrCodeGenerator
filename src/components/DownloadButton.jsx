// src/components/DownloadButton.jsx
import React from 'react';
import { toPng } from 'html-to-image';

const DownloadButton = ({ value, bgColor, fgColor }) => {
  const downloadQR = () => {
    const qrCode = document.getElementById('qr-code');
    toPng(qrCode)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qr-code.png';
        link.click();
      })
      .catch((err) => console.error('Download failed', err));
  };

  return (
    <button onClick={downloadQR}>Download QR Code</button>
  );
};

export default DownloadButton;
