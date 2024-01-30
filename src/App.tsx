import React, { useState } from 'react';
import { FormData, CountryType } from './components/interfaces/interface';
import { Dayjs } from 'dayjs';
import Form1 from './components/form1/Form1';
import Form2 from './components/form2/Form2';
import './App.css';

const StartupForm: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    website: '',
    location: {
      code: '',
      label: '',
      phone: '',
    },
    industry: '',
    technology: [],
    foundedDate: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocation = (countryData: CountryType): void => {
    setFormData({...formData, location: countryData})
  }

  const handleTech = (event: React.ChangeEvent<{}>, newValue: string[]): void => {
    setFormData({...formData, technology: newValue})
  }

  const handleDate = (newValue:Dayjs): void => {
    setFormData({...formData, foundedDate: newValue})
  }

  const handleNext = () => {
    setPage(2);
  };

  const handleBack = () => {
    setPage(1);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    
    // Submit the form data
    console.log(formData);
    fetch('https://vidare_test_endpoint.com/api/postEndpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Response:', data);
    })
    .catch(error => {
      setFormData({
        name: '',
        website: '',
        location: {
          code: '',
          label: '',
          phone: '',
        },
        industry: '',
        technology: [],
        foundedDate: null,
      })
      console.error('There was a problem with the POST request - Invalid endpoint');
    });
  };

  return (
    <div className='App'>
      {page === 1 ? (
        <Form1 onNext={handleNext} onChange={handleChange} formData={formData} locationData={handleLocation}  />
      ) : (
        <Form2
          onDateChange={handleDate}
          onTechChange={handleTech}
          onBack={handleBack}
          onSubmit={handleSubmit}
          onChange={handleChange}
          formData={formData}
        />
      )}
    </div>
  );
};

export default StartupForm;
