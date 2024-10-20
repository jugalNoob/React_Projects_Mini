import React from 'react';
import man from "./man.jpg";

function Dow() {
  return (
    <div>
{/* start row class */}

<img src={man} alt="jugal sharma" width="400" heigth="300" />
<a href={man} className="btn" download> click</a>

{/* last row class */}
    </div>
  )
}

export default Dow


/// doenload image and video informatuon  ------------------------>>

import React, { useEffect, useState } from 'react';

const ImageDownloader = () => {
  const [api, setApi] = useState([]);

  // Fetching product data (your existing fetch logic)
  const apis = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setApi(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apis(); // Fetch the API data when component mounts
  }, []);

  // Function to download an image
  const downloadImage = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up the DOM
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <div>
      {api && api.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} width="200" height="200" />
          <button onClick={() => downloadImage(item.image, `product-${index}.jpg`)}>
            Download Image
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageDownloader;
