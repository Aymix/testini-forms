import React, { useState } from 'react';
import axios from 'axios';


const FormComponent = () => {
  const [app_url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/form-submit', {
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
    

    <div class="min-h-screen flex items-center justify-center">
       
        <div class="flex flex-col md:flex-row bg-white shadow-lg max-w-4xl rounded-lg overflow-hidden">
         
            <div class="md:w-1/2 p-8 bg-black relative text-white">
                <img src="pitching.png" alt="Background" class="absolute inset-0 w-full h-full object-cover opacity-50"/>
                <div class="relative z-10">
                    <p class="uppercase tracking-wide text-xs mb-4">What we do ?</p>
                    <h1 class="text-4xl font-semibold mb-4">Get real users to test your app for cheap</h1>
                    <p class="text-sm">
                    - Design: The app has a clean and intuitive interface, making navigation straightforward. However, 
                    some users might find the add client feature a bit confusing.
                    <br/><br/>- Performance: Overall performance is smooth, with quick load times and minimal lag. 
                    </p>
                </div>
            </div>

          
            <div class="md:w-1/2 p-12">
                <div class="flex flex-col justify-center h-full">
                    <div class="mb-8">
                        <h2 class="text-3xl font-semibold mb-2">Testiny <span className="text-red">*</span></h2>
                        <p class="text-gray-500">
                          Enter your email and application url to receive a detailed 
                          review from a real users.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div class="mb-6">
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" placeholder="Enter your email"/>
                        </div>

                        <div class="mb-6">
                            <label for="url" class="block text-sm font-medium text-gray-700">Application link</label>
                            <input value={app_url} onChange={(e) => setUrl(e.target.value)} type="url" id="url" class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" placeholder="Enter your app url"/>
                        </div>

                        <button type="submit" class="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300">Proceed</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};

export default FormComponent;
