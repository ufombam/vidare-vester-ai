import React from 'react';
import { FormData } from '../../components/interfaces/interface';
import { TextField, Button, Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ArrowForwardIos } from '@mui/icons-material';



const Form2: React.FC<{ onBack: () => void; onSubmit: () => void; onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void; formData: FormData }> = ({
    onBack,
    onSubmit,
    onChange,
    formData,
}) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const industries = ['Finance', 'Healthcare', 'Education', 'Technology', 'Other'];

    const technologies = ['AI/ML', 'Blockchain', 'IoT', 'Mobile', 'Web', 'Other'];

    return (
    <div className='fm2-body'>
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
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                {/* <Autocomplete
                    id="country-select-demo"
                    multiple

                    //onChange={onChange} 
                    //value={formData.location}
                    sx={{ width: 300 }}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                alt=""
                            />
                        {option.label} ({option.code}) +{option.phone}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Location in Africa (registered)"
                            name='location'
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            required
                        />
                    )}
                /> */}
                <Button 
                    variant="contained" 
                    endIcon={<ArrowForwardIos />}
                    >
                    NEXT
                </Button>
            </Box>
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
    );
};

export default Form2;