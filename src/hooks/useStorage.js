import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

const useStorage = (file) => {

  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadFile = uploadBytesResumable(storageRef, file);

    uploadFile.on("state_changed", (snapshot) => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, (error) => {
      setError(error)
    }, () => {
      getDownloadURL(uploadFile.snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL);
      });
    })
  }, [file])

  return { progress, error, url };
}

export default useStorage;
