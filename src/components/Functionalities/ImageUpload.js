import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const Uploadimg = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imagesListRef=ref(storage,"images/")

  const imagefile = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((image) => {
        getDownloadURL(image.ref).then((url)=>{
            setImageList((prev)=>[...prev,url])
        })
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <imput
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={imagefile}>Upload image</button>
      {imageList.map((url)=>{return <img src={url}/>
    })}
    </div>
  );
};

export default Uploadimg;
