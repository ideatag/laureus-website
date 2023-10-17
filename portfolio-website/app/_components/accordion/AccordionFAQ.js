"use client"
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AccordionFAQ.css';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'; 



  const AccordionFAQ = ({ index,faqData:{summary,details} }) => (
      <div className="donations-faq-container">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`donations-faq-panel${index + 1}-content`}
              id={`donations-faq-panel${index + 1}-header`}
            >
              <QuestionAnswerIcon className="donations-faq-question-icon" />
              <Typography className="donations-faq-display-question" >
                {summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                {details}
              </Typography>
            </AccordionDetails>
          </Accordion>
      </div>
  );
  
  export default AccordionFAQ;
  