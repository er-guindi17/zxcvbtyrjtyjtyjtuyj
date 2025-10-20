import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadedImage } from '../types';
import { fileToBase64 } from '../utils/fileUtils';
import UploadIcon from './icons/UploadIcon';
import BackIcon from './icons/BackIcon';

interface Props {
  onImageUpload: (image: UploadedImage | null) => void;
}

const ImageUploader: React.FC<Props> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFileName(file.name);
      setPreview(URL.createObjectURL(file));
      try {
        const base64 = await fileToBase64(file);
        onImageUpload({
          base64,
          mimeType: file.type,
        });
      } catch (error) {
        console.error("Error converting file to base64", error);
        onImageUpload(null);
      }
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg', '.gif'] },
    multiple: false,
  });

  const removeImage = () => {
    setPreview(null);
    setFileName('');
    onImageUpload(null);
    if (preview) {
      URL.revokeObjectURL(preview);
    }
  };

  if (preview) {
    return (
      <div className="image-preview">
        <img src={preview} alt={fileName} />
        <button onClick={removeImage} className="remove-image-btn">
          <BackIcon /> Elegir otra imagen
        </button>
      </div>
    );
  }

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      <UploadIcon />
      <p>
        {isDragActive ? 'Suelta la imagen aquí...' : "Arrastra y suelta una imagen aquí, o haz clic para seleccionar"}
      </p>
    </div>
  );
};

export default ImageUploader;
