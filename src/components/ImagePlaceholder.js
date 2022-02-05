import { run as runHolder } from "holderjs/holder";
import React, { useEffect } from "react";

const ImagePlaceholder = ({ srcSize, className }) => {
  useEffect(() => {
    runHolder("image-class-name");
  });
  return <img className={className} src={`holder.js/${srcSize}`} />;
};

export default ImagePlaceholder;
