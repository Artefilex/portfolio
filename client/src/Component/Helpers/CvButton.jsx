import React, { memo, useCallback } from "react";

function CvButton() {
  const handleDownload = useCallback(() => {
    const downloadLink = document.createElement("a");
    downloadLink.href = process.env.PUBLIC_URL + "/cv.pdf";
    downloadLink.download = "cv.pdf";
    downloadLink.click();
  }, []);

  return (
    <button className="flex btn-cv" onClick={handleDownload}>
      {" "}
      <span>Download CV</span>
    </button>
  );
}

export default memo(CvButton);
