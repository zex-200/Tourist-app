Modifysrc/App.py
import React from "react";
import ImageUpload from "./components/ImageUpload";
import ImageGallery from "./components/ImageGallery";

function App() {
return (
  <div>
    <h1>Tourism Photo Gallery</h1>
    <ImageUpload />
    <ImageGallery />
  </div>
);
}
export default App;
