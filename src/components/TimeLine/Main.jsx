import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

import Box from '@mui/material/Box';
import { motion, AnimatePresence } from "framer-motion"

import TimeLine from './TimeLine';
import content from '../../content/cTimeLine';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box sx={{ p: 3 }}>
                <AnimatePresence mode="wait">
                    {value === index && (
                        <Typography component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            key={index}
                        >{children}</Typography>

                    )}
                </AnimatePresence>
            </Box>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Main = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    // Inside your component
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the max-width as needed

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="container mx-auto md:w-3/4 w-full">
            <Box sx={{ flexGrow: 1, display: 'flex', height: "max-content", alignItems: "center", flexDirection: isMobile ? 'column' : 'row' }}>
                <Tabs
                    orientation={isMobile ? "horizontal" : "vertical"}
                    variant={isMobile ? "fullWidth" : "scrollable"}
                    value={value}
                    onChange={handleChange}
                    aria-label="Tabs"
                    sx={isMobile ? { borderBottom: 1, borderColor: 'divider' } : { borderRight: 1, borderColor: 'divider' }}
                >
                    {Object.keys(content).map((day, idx) => (
                        <Tab key={idx} label={day} {...a11yProps({ idx })} />
                    ))}
                </Tabs>
                <div className="w-full">
                    {Object.keys(content).map((day, idx) => (
                        <TabPanel key={idx} value={value} index={idx} component="div">
                            <TimeLine key={idx} content={content[day]} day={day} />
                        </TabPanel>
                    ))}
                </div>
            </Box>
        </div>

    )
}

export default Main;