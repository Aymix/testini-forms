import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [app_url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/form-submit`, {
        app_url,
        email,
      });
      setMessage(response.data.message);  // Assuming the backend sends a success message

      // Reset form fields
      setUrl('');
      setEmail('');
    } catch (error) {
      setMessage('Failed to submit');
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row bg-white shadow-lg max-w-4xl rounded-lg overflow-hidden">
          
          <div className="md:w-1/2 p-8 bg-black relative text-white">
            <img src="pitching.png" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              
              {/* 'What we do ?' stays at the top */}
              <div>
                <p className="uppercase tracking-wide text-xs mb-4">What we do ?</p>
              </div>

              {/* h1 and p tag moved to the bottom */}
              <div className="mt-auto">
                <h1 className="text-4xl font-semibold mb-4 font-serif">Get real users to test your app for cheap</h1>
                <p className="text-sm">
                  - Performance: Overall performance is smooth, with quick load times and minimal lag.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12">
            <div className="flex flex-col justify-center h-full">
              <div className="mb-8">
                <h2 className="text-3xl font-semibold mb-2 font-serif">Testiny <span className="text-red-600">*</span></h2>
                <p className="text-gray-500 text-sm">
                  Enter your email and application URL to receive a detailed 
                  review from real users.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    id="email" 
                    className="text-sm mt-1 p-3 block w-full bg-gray-200 rounded-lg shadow-sm focus:ring-black focus:outline-none" 
                    placeholder="Enter your email" 
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="url" className="block text-sm font-medium text-gray-700">Application link</label>
                  <input 
                    value={app_url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    type="url" 
                    id="url" 
                    className="text-sm mt-1 p-3 block w-full bg-gray-200 rounded-lg shadow-sm focus:ring-black focus:outline-none" 
                    placeholder="Enter your app url" 
                  />
                </div>

  <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300">Proceed</button>
</form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
