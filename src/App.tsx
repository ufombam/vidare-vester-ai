import React, { useState } from 'react';
import { FormData } from './components/interfaces/interface';
import Form1 from './components/form1/Form1';
import Form2 from './components/form2/Form2';

const StartupForm: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    website: '',
    location: '',
    industry: '',
    technology: [],
    foundedDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("I am changing");
  };
  // const handleNextPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   console.log(name, value)
  // }

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedTech = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedTech.push(options[i].value);
      }
    }
    setFormData({ ...formData, technology: selectedTech });
  };

  const handleNext = () => {
    setPage(2);
  };

  const handleBack = () => {
    setPage(1);
  };

  const handleSubmit = () => {
    // Submit the form data
    console.log(formData);
  };

  return (
    <div>
      {page === 1 ? (
        <Form1 onNext={handleNext} onChange={handleChange} formData={formData} />
      ) : (
        <Form2
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
