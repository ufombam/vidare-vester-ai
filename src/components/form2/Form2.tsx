import React from 'react';
import { FormData } from '../../components/interfaces/interface';
import { Button, Box, FormControl, InputLabel, MenuItem, TextField, Autocomplete, Stack } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Form2.css';



const Form2: React.FC<{ onBack: () => void; onSubmit: () => void; onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void; formData: FormData }> = ({
    onBack,
    onSubmit,
    onChange,
    formData,
}) => {
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState<Dayjs | null>(null);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const industries = ['Finance', 'Healthcare', 'Education', 'Technology', 'Other'];

    const technologies = ['AI/ML', 'Blockchain', 'IoT', 'Mobile', 'Web', 'Other'];

    return (
    <div className='fm2-body'>
        <div className='fm2-left'>
            <h1>RIGHT</h1>
            <label>
            Industry:
            <select name="industry" onChange={onChange} value={formData.industry}>
                {industries.map((industry, index) => (
                <option key={index} value={industry}>
                    {industry}
                </option>
                ))}
            </select>
            </label>
            <br />
            <label>
            Technology Used:
            <select
                name="technology"
                onChange={onChange}
                value={formData.technology}
                multiple
            >
                {technologies.map((tech, index) => (
                <option key={index} value={tech}>
                    {tech}
                </option>
                ))}
            </select>
            </label>
            <br />
            <label>
            Founded Date:
            <input
                type="date"
                name="foundedDate"
                value={formData.foundedDate}
                onChange={onChange}
                required
            />
            </label>
            <br />
            <button onClick={onBack}>Back</button>
            <button onClick={onSubmit}>Submit</button>
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
                        <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Industry"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Autocomplete
                    id="technology used"
                    multiple
                    sx={{ width: 300 }}
                    options={technologies}
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
                        value={value} onChange={(newValue) => setValue(newValue)}
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
                            >
                            BACK
                        </Button>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIos />}
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