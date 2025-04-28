import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import hero from '/money.png';  // background
import card from '/card.png';    // card image

const Screen = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      alert(`Submitted Email: ${email}`);
    }
  };

  const questions = [
    { question: "Chocolate or Vanilla?", options: ["Chocolate", "Vanilla"] },
    { question: "Coffee or Tea?", options: ["Coffee", "Tea"] },
    { question: "Summer or Winter?", options: ["Summer", "Winter"] },
  ];

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Background */}
      <img
        src={hero}
        alt="Hero"
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -2 }}
      />

      {/* Light Green Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(178, 238, 144, 0.68)',
          zIndex: -1,
        }}
      />

      {/* Top Bar */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: '400px',
          backgroundColor: '#333',
          color: '#fff',
          fontSize: { xs: '10px', sm: '12px' },
          textAlign: 'center',
          py: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        })}
      >
        Privacy Policy | Terms Of Service | Official Rules
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: '70px', sm: '60px' },  // pushed below the top bar
          textAlign: 'center',
        //   px: 2,
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        {/* Card Image */}
        <Box>
          <img
            src={card}
            alt="Gift Card"
            style={{
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
              margin: '0 auto',
              display: 'block',
            }}
          />
        </Box>

        {/* Headline */}
        <Typography fontSize={{ xs: 24, sm: 30 }} fontWeight="bold" color="black" mt={2}>
          YOU'VE WON A
        </Typography>

        {/* Amount */}
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: 40, sm: 90 },
            color: 'black',
            textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
            // my: 1,
          }}
        >
          $500.00
        </Typography>

        {/* Sub Text */}
        <Typography fontSize={{ xs: 20, sm: 30 }} color="black" fontWeight="bold" mb={3}>
          Amazon Gift Card Entry
        </Typography>

        {/* Steps */}
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            p: { xs: 2, sm: 3 },
            border: '6px solid #220000',
            textAlign: 'center',
            
          }}

        >
          {step <= 3 ? (
            <>
              <Typography fontSize={{ xs: 14, sm: 16 }} color="textSecondary" mb={1}>
                Answer question {step} of 3:
              </Typography>

              <Typography fontSize={{ xs: 20, sm: 24 }} fontWeight="bold" mb={3}>
                {questions[step - 1].question}
              </Typography>

              <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="center" gap={2}>
                {questions[step - 1].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    onClick={handleNextStep}
                    sx={{
                      backgroundColor: 'black',
                      color: '#fff',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1,
                      borderRadius: '8px',
                      fontSize: { xs: '14px', sm: '16px' },
                      width: { xs: '100%', sm: 'auto' },
                      '&:hover': {
                        backgroundColor: '#555',
                      },
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Enter Your Email to Claim Prize
              </Typography>
              <TextField
                fullWidth
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'black',
                  color: '#fff',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1,
                  fontSize: { xs: '14px', sm: '16px' },
                  '&:hover': {
                    backgroundColor: 'darkgreen',
                  },
                  width: '100%',
                }}
                onClick={handleNextStep}
              >
                Submit
              </Button>
            </>
          )}
        </Box>
      </Box>

      {/* Bottom Footer */}
      <Box
        sx={{
          width: '100%',
          mt: 5,
          backgroundColor: '#fff',
          textAlign: 'center',
          pt: 3,
          pb: 3,
          

          fontSize: { xs: '10px', sm: '12px' },
          color: '#666',
          position: 'relative',
        }}
      >
        <Typography variant="body2" sx={{ mb: 1 , pr:3}}>
          Welcome to one of Flatiron Media’s suites of content and promotions websites. 
          Our portfolio of lifestyle sites is an indispensable tool that informs, inspires 
          and entertains millions of consumers.
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Every-day-winners.com Sweepstakes: NO PURCHASE OR PAYMENT NECESSARY. Open to legal residents age 18+ at entry. 
          Sweepstakes subject to Official Rules. Sponsor: Flatiron Media, LLC.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
  Copyright © 2015-2025. All rights reserved.
  <br />
  Everyday Winner is a trademark of Flatiron Media, LLC  <br />
  <span style={{ color: '#0077cc', marginLeft: '4px', marginRight: '4px' }}>Privacy Policy</span> |
  <span style={{ color: '#0077cc', marginLeft: '4px', marginRight: '4px' }}>Official Rules</span> |
  <span style={{ color: '#0077cc', marginLeft: '4px', marginRight: '4px' }}>Terms of Service</span>
</Typography>

      </Box>
    </Box>
  );
};

export default Screen;
