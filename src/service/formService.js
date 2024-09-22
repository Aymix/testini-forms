// src/api/formService.js
const submitForm = async (appUrl, email, csrfToken) => {
    try {
      const response = await fetch('/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken // CSRF token for security
        },
        body: JSON.stringify({
          app_url: appUrl,
          email: email
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Handle error in the calling component
    }
  };
  
  export { submitForm };
  