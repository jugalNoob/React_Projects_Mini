// import React, { useEffect, useState } from 'react';

// const ImageDownloader = () => {
//   const [api, setApi] = useState([]);

//   // Fetching product data (your existing fetch logic)
//   const apis = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       setApi(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     apis(); // Fetch the API data when component mounts
//   }, []);

//   // Function to download an image
//   const downloadImage = async (url, filename) => {
//     try {
//       const response = await fetch(url);
//       const blob = await response.blob();
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = filename;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link); // Clean up the DOM
//     } catch (error) {
//       console.error("Error downloading the image:", error);
//     }
//   };

//   return (
//     <div>
//       {api && api.map((item, index) => (
//         <div key={index}>
//           <h2>{item.title}</h2>
//           <img src={item.image} alt={item.title} width="200" height="200" />
//           <button onClick={() => downloadImage(item.image, `product-${index}.jpg`)}>
//             Download Image
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageDownloader;



 import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../style/progessbar.css";

function Progbar() {


    //get url  ------------------------ how to get url in react.js
    const { id } = useParams(); // Access the id from the URL
    const fullUrl = window.location.href; // Get the full URL

    console.log(id, "id"); // Logs the id parameter
    console.log(fullUrl, "full URL"); // Logs the full URL




// progessbar  ----------------------------

    const [filled , setFiiled]=useState(0)
    const [run , setRun]=useState()


    // useEffect(() => {
    //     if (filled <= 100 && run) {
    //         const timer = setTimeout(() => {
    //             setFiiled(prevFilled => prevFilled + 2);
    //         }, 100);
            
    //         return () => clearTimeout(timer); // Clean up the timeout
    //     } else if (filled >= 100) {
    //         alert("Complete");
    //         setRun(false); // Stop the process after completion
    //     }
    // }, [filled, run]);


    //easy way to 


    useEffect(()=>{

        if(filled < 100  && run){
            setTimeout(()=>setFiiled(prev=>prev+2) , 100)
        }

        // if(filled >= 100){
        //     alert("Complete");
        //     setRun(false);
        // }

      
    }, [filled , run])


    //progessBar  in React 


// api dwonload information 



const [api, setApi] = useState([]);

const fetchApi = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setApi(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

useEffect(() => {
    fetchApi(); // Fetch the API data when the component mounts
}, []); // Empty dependency array to avoid infinite loop

  return (
    <div>

{api && api.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} width="200" height="200" />
                    <a href={item.image} className="btn" download={`product-${index}.jpg`}>
                        Download
                    </a>
                </div>
            ))}


<div className="pro">

<div style={{
    width: `${filled}%`,
    backgroundColor: "red",
    height: "100%",
    width:`${filled}%`,
    transition: "width 0.5s "
  
}}></div>
<span className='progressPercent'>{filled}%</span>
</div>


<button onClick={()=>setRun(true)}>click</button>

    </div>
  )
}

export default Progbar
