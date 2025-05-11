import React, { useEffect, useState } from "react";
import axios from "axios";

function ImageGallery() {}
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/photos")
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error("Error fetching photos", error);
      });
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map(photo => (
          <img key={photo.id} src={http://127.0.0.1:5000/uploads/${photo.filename`}`} 
               alt="Tourism" width="200" style={{ margin: "5px" }} {'/>'}
        ))
      </div>
    </div>
  );
'}'

export default ImageGallery;