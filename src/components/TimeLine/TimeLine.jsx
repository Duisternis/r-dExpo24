import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion, AnimatePresence } from "framer-motion"

import Card from './Cards';
import { Superscript } from '@mui/icons-material';


const extra_content = {
  "Day 1": <span>3<sup>rd</sup> May 2024</span>,
  "Day 2": <span>4<sup>th</sup> May 2024</span>,
  "Day 3": <span>5<sup>th</sup> May 2024</span>,
}

const TimeLine = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [aniVal, setAniVal] = React.useState(1);

  const dynamicCSS = {
    enter: (direction) => ({
      opacity: 0,
      x: direction * -10
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction * 10
    }),
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setAniVal(1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setAniVal(-1);
  };

  return (
    <div>

      <h2 className="w-fit mx-auto text-2xl my-10">
        {extra_content[props.day]}
      </h2>

      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {props.content.map((label, index) => {
            const labelProps = {};
            labelProps.optional = (
              <Typography variant="caption" className="hidden md:block">[{label.start_time} - {label.end_time}]</Typography>
            );
            return (
              <Step key={index}>
                <StepLabel {...labelProps}>{label.event}</StepLabel>
              </Step>
            );
          })}
        </Stepper>



        <React.Fragment>
          <AnimatePresence mode="wait" custom={aniVal} initial={false}>
            <motion.div key={activeStep}
              initial="enter"
              animate="visible"
              exit="exit"
              variants={dynamicCSS}
              custom={aniVal}
            >
              <Card key={activeStep} content={props.content[activeStep]} images={props.images} />
            </motion.div>
          </AnimatePresence>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button
              onClick={handleNext}
              disabled={activeStep === props.content.length - 1}
            >
              Next
            </Button>
          </Box>
        </React.Fragment>

      </Box>
    </div>

  );
}

export default TimeLine;
