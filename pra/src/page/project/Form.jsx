import React, { useEffect, useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  //validation ............
  const [errors, setErrors] = useState({});  //this for validation purpose 

  const validate = () => {  /// validation form 
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }else if(name.length<7){
      errors.name = 'add more word';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!pass) {
      errors.password = 'Password is required';
    }else if(pass.length<7){

      errors.password = 'enter more word';
    }

    return errors;
  };


  useEffect(()=>{


  },[])




  let timeout;

  let count=0 //count  for check number of click

  // Debounce function to log form data after 2 seconds
  const debounce = (e) => {
  
    console.log("count", count++) ///check how many click happend 
    e.preventDefault(); // Prevent the form from submitting

   const errors= validate()

    clearTimeout(timeout);   //debounce Timeout
    timeout = setTimeout(() => {
 
      
   if (Object.keys(errors).length === 0) { // check validation error messages
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", pass);

    
  } else {
    setErrors(errors);
  }

  console.log(errors)
    }, 2000);
  };





  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <p>  {errors.name && <span>{errors.name}</span>}</p> 


        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
              <p>  {errors.email && <span>{errors.email}</span>}</p> 

<br />
<br />

        <input
          type="password"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

<p>  {errors.pass && <span>{errors.pass}</span>}</p> 

<br />
<br />

        <button onClick={debounce}>Click form</button>
      </form>
    </div>
  );
}

export default Form;


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