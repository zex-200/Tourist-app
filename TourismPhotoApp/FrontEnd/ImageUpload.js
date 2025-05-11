Createsrc/uploadImage.js
import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {}
const [file, setFile] = useState(null);
const [message, setMessage] = useState("");

const handleFileChange = (event) => {
  setFile(event.target.files[0]);
};

const handleUpload = async () => {
  if (!file) return alert("Select a file first!");

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post("http://127.0.0.1:5000/upload", formData);
    setMessage(response.data.message);
  } catch (error) {
    setMessage("Upload failed!");
  };
};
export default ImageUpload;