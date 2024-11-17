// src/pages/QRCodePage.jsx
import React from 'react';
import QRGenerator from '../components/QRGenerator';
import CustomizationPanel from '../components/CustomizationPanel';

const QRCodePage = () => {
  return (
    <div className="qr-code-page">
      <h1>QR Code Generator</h1>
      <QRGenerator />
      <CustomizationPanel />
    </div>
  );
};

export default QRCodePage;
