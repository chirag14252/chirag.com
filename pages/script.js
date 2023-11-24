// import {Cloudinary} from "@cloudinary/url-gen";

// const cld = new Cloudinary({cloud: {cloudName: 'dkfraz9lt'}});


// Assuming you have an HTML form with an ID 'myForm' and a submit button with an ID 'submitButton'
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Gather form data
    var formData = new FormData(event.target);
    
    // Convert form data to an object
    var formDataObject = {};
    formData.forEach(function (value, key) {
      formDataObject[key] = value;
    });
  
    // Send the form data to your Google Apps Script
    submitForm(formDataObject);
  });
  
  function submitForm(formData) {
    // Create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
  
    // Set up the request
    xhr.open('POST', 'https://your-apps-script-url', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    // Define the data to be sent
    var data = JSON.stringify(formData);
  
    // Define the function to handle the response
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var response = JSON.parse(xhr.responseText);
        if (response.result === 'success') {
          // Redirect to the URL provided by the response
          window.location.href = response.redirect;
        } else {
          // Handle error
          console.error('Error:', response.error);
        }
      } else {
        console.error('Request failed with status:', xhr.status);
      }
    };
  
    // Handle network errors
    xhr.onerror = function () {
      console.error('Network error occurred');
    };
  
    // Send the request
    xhr.send(data);
  }
  