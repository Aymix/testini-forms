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
    <div className="bg-white flex font-montserrat justify-center items-center w-full min-h-screen px-5 py-5 ">
      <div className="xl:max-w-[1200px] bg-white h-[84vh] w-full flex justify-between items-center">
        <div className="flex flex-col align-start w-1/2 pt-[80px] pr-[120px] pl-[110px] h-[600px] bg-[#fffdd9]">
          <div className="pr-[20px]">
            <h1 className="text-[28px] leading-[35px] font-medium text-[#434343]">
            Get real users to test your app for cheap
            </h1>
            <h3 className="w-full mt-4 font-light text-[14px] pt-[1px] text-[#4F4F4F]">
              The app has a clean and intuitive interface, making navigation straightforward. However, some users might find the add client a bit confusing.
              <br/><br/>Performance: Overall performance is smooth, with quick load times and minimal lag. 
            </h3>
          </div>
          <div className="w-full mt-4 ">
            <div className="w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* URL Input with Icon */}
                <div className="relative">
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={app_url}
                  onChange={(e) => setUrl(e.target.value)}
                  className={`w-full bg-transparent border-b-2 border-gray-300 px-2 pb-1 pt-4 text-black placeholder-transparent focus:outline-none focus:ring-0 focus:border-blue-500 transition duration-300 ${
                    app_url ? 'pt-10' : ''
                  }`}
                  placeholder="Your App Url"
                  required
                />
                <label
                  htmlFor="url"
                  className={`absolute left-2 top-4 text-gray-400 text-sm transition-all duration-300 ease-in-out ${
                    app_url ? 'top-1 text-xs text-blue-500' : ''
                  }`}
                >
                  Your App Url
                </label>
                </div>

                {/* Email Input with Icon */}
                <div className="relative">
                <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full bg-transparent border-b-2 border-gray-300 px-2 pb-1 pt-4 text-black placeholder-transparent focus:outline-none focus:ring-0 focus:border-blue-500 transition duration-300 ${
              email ? 'pt-10' : ''
            }`}
            placeholder="Your Email"
            required
          />
          <label
            htmlFor="email"
            className={`absolute left-2 top-4 text-gray-400 text-sm transition-all duration-300 ease-in-out ${
              email ? 'top-1 text-xs text-blue-500' : ''
            }`}
          >
            Your Email
          </label>
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-start items-center">
                  <button className="btn mt-4 btn-active btn-primary border-transparent btn-block rounded-full max-w-[200px] text-[#fff] bg-[#000]">
                    Proceed
                  </button>
                </div>
              </form>
              {message && <p className="text-red-500 mt-4">{message}</p>}
            </div>
          </div>
        </div>
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          <img src="pitching_idea.png" alt="login" className="w-full h-auto" />

        </div>
      </div>
    </div>



<div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div class="bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] hidden bg-cover lg:block lg:w-2/3">
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white">Testini</h2>
                        
                        <p class="max-w-xl mt-3 text-gray-300">The app has a clean and intuitive interface, making navigation straightforward. However, some users might find the add client a bit confusing.

Performance: Overall performance is smooth, with quick load times and minimal lag.</p>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Testini</h2>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Get real users to test your app for cheap</p>
                    </div>

                    <div class="mt-8">
                        <form>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Application Url</label>
                                    
                                </div>

                                <input type="url" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Proceed
                                </button>
                            </div>

                        </form>

                       
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="min-h-screen flex items-center justify-center">
       
        <div class="flex flex-col md:flex-row bg-white shadow-lg max-w-4xl rounded-lg overflow-hidden">
         
            <div class="md:w-1/2 p-8 bg-black relative text-white">
                <img src="pitching.png" alt="Background" class="absolute inset-0 w-full h-full object-cover opacity-50"/>
                <div class="relative z-10">
                    <p class="uppercase tracking-wide text-xs mb-4">A Wise Quote</p>
                    <h1 class="text-4xl font-semibold mb-4">Get Everything You Want</h1>
                    <p class="text-sm">You can get everything you want if you work hard, trust the process, and stick to the plan.</p>
                </div>
            </div>

          
            <div class="md:w-1/2 p-12">
                <div class="flex flex-col justify-center h-full">
                    <div class="mb-8">
                        <h2 class="text-3xl font-semibold mb-2">Welcome Back</h2>
                        <p class="text-gray-500">Enter your email and password to access your account</p>
                    </div>

                    <form>
                        <div class="mb-6">
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" placeholder="Enter your email"/>
                        </div>

                        <div class="mb-6">
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black" placeholder="Enter your password"/>
                        </div>

                        <div class="flex items-center justify-between mb-6">
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-4 w-4 text-black"/>
                                <span class="ml-2 text-gray-700">Remember me</span>
                            </label>
                            <a href="#" class="text-sm text-black hover:underline">Forgot Password</a>
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
