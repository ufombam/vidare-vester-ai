import React, { useState } from 'react';
import { FormData } from '../../components/interfaces/interface';
import { Button, Box, FormControl, InputLabel, MenuItem, TextField, Autocomplete, Stack } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Form2.css';



const Form2: React.FC<{ onBack: () => void; onSubmit: () => void; onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void; formData: FormData; onTechChange: (event: React.ChangeEvent<{}>, newValue: string[]) => void }> = ({
    onBack,
    onSubmit,
    onChange,
    formData,
    onTechChange
}) => {
    const [industry, setIndustry] = React.useState<string>('');
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
    const [date, setDate] = React.useState<Dayjs | null>(null);

    const handleChange = (event: SelectChangeEvent) => {
        setIndustry(event.target.value as string);
    };
    const industries = ['Finance', 'Healthcare', 'Education', 'Technology', 'Other'];

    const technologies = ['AI/ML', 'Blockchain', 'IoT', 'Mobile', 'Web', 'Other'];

    return (
    <div className='fm2-body'>
        <div className='fm2-left'>
            <h1>RIGHT</h1>
        </div>
        <div className='fm2-right'>
            <h2>Additional Information</h2>
            <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <FormControl fullWidth>
                        <InputLabel id="industry_label">Industry</InputLabel>
                        <Select
                            labelId="industry"
                            id="industry_tag"
                            value={industry}
                            label="Industry"
                            name='industry'
                            onChange={(event: any) => {
                                onChange(event); 
                                return handleChange}}
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
                        value={selectedTechnologies}
                        onChange={(event: any, value) => {
                            onTechChange(event, value)
                          return  setSelectedTechnologies(value)
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
                        value={date} onChange={(newValue) => {
                           return setDate(newValue)
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
                            >
                            BACK
                        </Button>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIos />}
                            onClick={onSubmit}
                            >
                            SUBMIT
                        </Button>
                    </Stack>
            </Box>
        </div>
        
    </div>
    );
};

export default Form2;