import React from 'react';
import jsPDF from 'jspdf';

const PDFDownloadButton = ({ meterReadings }) => {
  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 297], // A4 size
    });
    doc.setFontSize(12); // Adjust the font size
  
    doc.text('Meter Readings', 10, 10);
  
    let yPosition = 30;
  
    Object.entries(meterReadings.meterReadings).forEach(([key, value]) => {
      if (key !== '_id') {
        // Check if the text exceeds the available width and split if necessary
        const maxWidth = 180; // Adjust as needed
        const textLines = doc.splitTextToSize(`${key}: ${value}`, maxWidth);
        doc.text(textLines, 10, yPosition);
        yPosition += textLines.length * 6; // Adjust line height
      }
    });
  
    doc.save('meter_readings.pdf');
  };
  

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PDFDownloadButton;
