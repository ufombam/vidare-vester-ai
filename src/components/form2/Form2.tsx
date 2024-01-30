import React from 'react';
import { FormData } from '../../components/interfaces/interface';
import { Button, Box, FormControl, InputLabel, MenuItem, TextField, Autocomplete, Stack } from '@mui/material';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Footer from '../footer/Footer';
import logo from '../../assets/logo/vester_ai.png';
import './Form2.css';


const Form2: React.FC<{ 
        onBack: () => void;
        onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void; 
        onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void; 
        formData: FormData; 
        onTechChange: (event: React.ChangeEvent<{}>, newValue: string[]) => void;
        onDateChange: (newValue: string | any) => void;
    }> = ({
    onBack,
    onSubmit,
    onChange,
    formData,
    onTechChange,
    onDateChange
}) => {
    const industries = ['Finance', 'Healthcare', 'Education', 'Technology', 'Other'];

    const technologies = ['AI/ML', 'Blockchain', 'IoT', 'Mobile', 'Web', 'Other'];

    return (
    <div className='fm2-body'>
        <div className='fm2-main'>
            <div className='fm2-left'>
                <div className="fm2-left_header"><img src={logo} alt="vester_logo" /></div>
                <h1><span>AI Assessment:</span> </h1>
                <h1>Your Path to Precision</h1>
                <h1>and Progress! </h1>
                <p>"Welcome to Vester AI, your AI assessment ally. Elevate your journey with personalized insights tailored for success."</p>
            </div>
            <div className='fm2-right'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <h1 style={{width: "100%"}}>Additional Information</h1>
                        <FormControl fullWidth required>
                            <InputLabel id="industry_label">Industry</InputLabel>
                            <Select
                                labelId="industry"
                                id="industry_tag"
                                value={formData.industry}
                                label="Industry"
                                name='industry'
                                onChange={(event: any) => {
                                    return onChange(event);
                                }}
                                >
                                {industries.map((industry, index) =>
                                    <MenuItem key={index} value={industry}>{industry}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <Autocomplete
                            id="technology used"
                            multiple
                            sx={{ width: 300 }}
                            options={technologies}
                            value={formData.technology}
                            onChange={(event: any, value) => {
                               return onTechChange(event, value);
                            }}
                            autoHighlight
                            getOptionLabel={(option) =>  option}
                            renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {option}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Technology Used"
                                name='technology'
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                required
                            />
                        )}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Founded Date"
                            value={formData.foundedDate} onChange={(newValue) => {
                                const myDate = (newValue?.toDate().toLocaleDateString().split('/').join('-'));
                              return  onDateChange(dayjs(myDate));
            
                            }}
                            slotProps={{
                            textField: {
                                helperText: 'MM/DD/YYYY',
                            },
                            }}
                        />
                    </LocalizationProvider>
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="outlined"
                                startIcon={<ArrowBackIos />}
                                onClick={onBack}
                                color="secondary"
                                >
                                BACK
                            </Button>
                            <Button
                                type='submit'
                                variant="contained"
                                endIcon={<ArrowForwardIos />}
                                onClick={onSubmit}
                                color="secondary"
                                >
                                SUBMIT
                            </Button>
                        </Stack>
                </Box>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default Form2;