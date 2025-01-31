import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Validation
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    } else if (name.length < 7) {
      errors.name = 'Name must be at least 7 characters long';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!pass) {
      errors.password = 'Password is required';
    } else if (pass.length < 7) {
      errors.password = 'Password must be at least 7 characters long';
    }

    return errors;
  };

  let timeout;
  let count = 0; // count for checking number of clicks

  // Debounce function to log form data after 2 seconds
  const debounce =async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    console.log('Count:', count++); // Track number of clicks

    const errors = validate(); // Validate the form fields

    clearTimeout(timeout); // Clear timeout for debounce
    timeout = setTimeout(() => {
      if (Object.keys(errors).length === 0) { // If no validation errors
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', pass);
        console.log('Country:', country);
        console.log('Gender:', gender);

        // const one=await fetch('')
        // console.log('One:', one)
      } else {
        setErrors(errors); // Set validation errors if any
      }
      console.log(errors);
    }, 2000);
  };

  return (
    <div>
      <form>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{errors.name && <span>{errors.name}</span>}</p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{errors.email && <span>{errors.email}</span>}</p>

        {/* Password Input with Show/Hide Feature */}
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        <p>{errors.password && <span>{errors.password}</span>}</p>

        {/* Gender Radio Buttons */}
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={() => setGender('Male')}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={() => setGender('Female')}
          />
          Female
        </label>
        <p>Selected Gender: {gender}</p>

        {/* Country Select */}
        Country:
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="" disabled>
            Select your country
          </option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
          <option value="india">India</option>
        </select>

        {/* Submit Button */}
        <button onClick={debounce}>Submit</button>
      </form>
    </div>
  );
}

export default Form;


// import React, { useEffect, useState } from 'react';

// function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [country , setCountry] = useState('');
//   const [gender, setGender] = useState('');


//   //validation ............
//   const [errors, setErrors] = useState({});  //this for validation purpose 

//   const validate = () => {  /// validation form 
//     const errors = {};

//     if (!name) {
//       errors.name = 'Name is required';
//     }else if(name.length<7){
//       errors.name = 'add more word';
//     }

//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Email is invalid';
//     }

//     if (!pass) {
//       errors.password = 'Password is required';
//     }else if(pass.length<7){

//       errors.password = 'enter more word';
//     }

//     return errors;
//   };


//   useEffect(()=>{


//   },[])




//   let timeout;

//   let count=0 //count  for check number of click

//   // Debounce function to log form data after 2 seconds
//   const debounce = (e) => {
  
//     console.log("count", count++) ///check how many click happend 
//     e.preventDefault(); // Prevent the form from submitting

//    const errors= validate()

//     clearTimeout(timeout);   //debounce Timeout
//     timeout = setTimeout(() => {
 
      
//    if (Object.keys(errors).length === 0) { // check validation error messages
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", pass);
//     console.log("country:", country);
//     console.log("gender:", gender);
    
//   } else {
//     setErrors(errors);
//   }

//   console.log(errors)
//     }, 2000);
//   };





//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <br />
//         <p>  {errors.name && <span>{errors.name}</span>}</p> 


//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//               <p>  {errors.email && <span>{errors.email}</span>}</p> 

// <br />
// <br />

// <input
//         type={showPassword ? 'text' : 'password'} // Toggle input type between text and password
//         placeholder="Enter your password"
//         value={pass}
//         onChange={(e) => setPass(e.target.value)}
//       />

// <p>  {errors.pass && <span>{errors.pass}</span>}</p> 

// <br />
// <br />
// <label>
//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           onChange={() => setGender('Male')}
//         />
//         Male
//       </label>

//       {/* Radio button for Female */}
//       <label>
//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           onChange={() => setGender('Female')}
//         />
//         Female
//       </label>

//       <p>Selected Gender: {gender}</p>

// <br />
// <br />

// Country:
//         <select value={country} onChange={(e) => setCountry(e.target.value)}>
//           <option value="" disabled>Select your country</option>
//           <option value="usa">USA</option>
//           <option value="canada">Canada</option>
//           <option value="uk">UK</option>
//           <option value="india">India</option>
//         </select>

//         <button onClick={debounce}>Click form</button>
//       </form>
//     </div>
//   );
// }

// export default Form;


// const validateName = () => {
//     if (!name) {
//       setNameError("Name is required.");
      
//     } else if (name.length < 3) {
//       setNameError("Name must be at least 3 characters long.");
//     } else {
//       setNameError("");
//     }
//   };

//   useEffect(()=>{

//     validateName()
//   },[])