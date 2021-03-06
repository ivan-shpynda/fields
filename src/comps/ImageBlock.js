import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { storage } from "../firebase/config";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

const ImageBlock = ({ setSelectedImg, user }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please, select an image file (png pr jpeg)")
    }
  };

  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef).then(response => {
      response.items.forEach(item => {
        getDownloadURL(item).then(url => {
          setImageList(prev => [ url, ...prev ])
        })
      })
    })
  }, []);

  return (
    <>
      {user ? 
        <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <FontAwesomeIcon icon={faCirclePlus} />
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div> }
          { file && <div>{ file.name }</div>}
          { file && <ProgressBar file={file} setFile={setFile} setImageList={setImageList} /> }
        </div>
      </form>
        :
        <div className="phone-icon-block">
          <FontAwesomeIcon className="phone-icon" icon={faMobileScreenButton} />
        </div>
        
      }
      <div className="img-grid">
        {imageList && imageList.map(url => (
          <motion.div
            className="img-wrap"
            key={url}
            onClick={() => setSelectedImg(url)}
            layout
            whileHover={{
              opacity: 1
            }}
          >
            <motion.img
              src={url}
              alt="uploaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            /> 
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default ImageBlock;
