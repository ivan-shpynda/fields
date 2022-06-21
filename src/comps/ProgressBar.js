import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile, setImageList }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if(url) {
      setFile(null);
      setImageList(prev => [ url, ...prev ]);
    }
  }, [url]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    />
  )
}

export default ProgressBar;
