import { FileUpload } from '@egovernments/digit-ui-components';
import React, { useState } from 'react';

const ImageUpload = ({ onUpload }) => {

    console.log(onUpload);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = async (file) => {
    try {
      const response = await Digit.UploadServices.Filestorage("complaint", file, Digit.ULBService.getStateId());
      if (response?.data?.files?.length > 0) {
        const fileStoreId = response.data.files[0].fileStoreId;
        setUploadedFiles([...uploadedFiles, { file, fileStoreId }]);
        if (onUpload) onUpload(fileStoreId);
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
const cardStyle={
    height:"20px"
}
  return (
    <div style={
    cardStyle
    }>
    <FileUpload
      uploadedFiles={uploadedFiles}
      variant="uploadImage"
      onUpload={handleUpload}
    />
    </div>
  );
};

export default ImageUpload;