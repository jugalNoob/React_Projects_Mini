import React, { useState } from 'react';

function Todo() {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    // Add a new box by appending an empty string (or any identifier) to the boxes array
    setBoxes([...boxes, '']);
  };

  const deleteBox = (index) => {
    // Remove the box by filtering out the box at the given index
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button onClick={addBox}>Create Box</button>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {boxes.map((_, index) => (
          <div
            key={index}
            style={{
              width: '200px',
              height: '200px',
              border: '1px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              position: 'relative'
            }}
          >
            <span>Box iam {index + 1}</span>
            <button
              onClick={() => deleteBox(index)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;


/// ::::::::::::::::::::::  Simple create Button Component ::::::::::::::::::::::::::

// import React, { useState } from 'react';

// function Todo() {
//   const [boxes, setBoxes] = useState([]);

//   const addBox = () => {
//     // Add a new box by appending an empty string (or any identifier) to the boxes array
//     setBoxes([...boxes, '']);
//   };

//   return (
//     <div>
//       <button onClick={addBox}>Create Box</button>
      
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
//         {boxes.map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: '200px',
//               height: '200px',
//               border: '1px solid black',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: '#f0f0f0'
//             }}
//           >
//             Box {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Todo;







 /// :::::::::::   list queck and stack of  :::::::::::::::::::::::::::::::

// import React, { useState } from 'react';

// function Stacks() {
//   const [data, setData] = useState([]);
//   const [pu, setPu] = useState('');

//   const Pushing = (e) => {
//     e.preventDefault();
//     setData([...data, pu]); // Push 'pu' into the 'data' array
//     setPu(''); // Clear the input field
//   }

//   const Display = (e) => {
//     e.preventDefault();
//     console.log(data);
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           name=""
//           id=""
//           value={pu}
//           onChange={(e) => setPu(e.target.value)}
//           placeholder='sexy one'
//         />
//         <button onClick={Pushing}>Push</button>
//         <button onClick={Display}>Display</button>
//       </form>

//       <div>
//         <h2>Data Array:</h2>
//         <ul>
//           {data.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Stacks;


// import React, { useState } from 'react'

// function Stacks() {
//     let data=[]
//     let item=data.length

//     const [pu , setPu]=useState([])
    
//     const Pushing=(e)=>{
//     e.preventDefault(); 
          
//            data[item] = pu;
//            item++;
// console.log(data)
//     }


  

//   const Display=(e)=>{
//     e.preventDefault();
//         console.log(data)
//         for(let i=0; i<data.length; i++){
//             console.log(data[i])
//         }
//     }


//   return (
//     <div>
// <form >
// <input type="text" name="" id="" onChange={(e)=>setPu(e.target.value)} placeholder='sexy one'/>

// <button onClick={Pushing}>push</button>


// <button onClick={Display}>display</button>
// </form>

//     </div>
//   )
// }

// export default Stacks