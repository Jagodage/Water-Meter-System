import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'; // Import the PDFDownloadButton component

const MeterReadingCard = ({ meterReadings }) => {
  const cardRef = useRef(null);

  const handleDownloadPDF = () => {
    const card = cardRef.current;
    console.log("card", card);

    if (!card) {
      console.error('Card element not found.');
      return;
    }

    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save('card.pdf');
    });
  };

  return (
    <Card variant="outlined" className='card'>
      <CardContent>
      <div className="cardcont" ref={cardRef}>
        {Object.entries(meterReadings.meterReadings).map(([key, value]) => {
          if (key !== '_id') {
            return (
              <div key={key}>
                <Typography variant="h6" component="div">
                  {key}
                </Typography>
                <Typography color="text.secondary">
                  {value}
                </Typography>
              </div>
            );
          }
          return null; // Skip the _id property
        })}
        </div>
        <Button variant="contained" color="success" sx={{ mt: 3 }} onClick={handleDownloadPDF}>
          Download
        </Button>
      </CardContent>
    </Card>
  );
};

export default MeterReadingCard;
