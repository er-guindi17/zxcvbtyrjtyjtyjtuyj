import React, { useState } from 'react';
import PersonalitySelector from './PersonalitySelector';
import ResponseDisplay from './ResponseDisplay';
import ImageUploader from './ImageUploader';
import { generateImageResponse } from '../services/geminiService';
import { Personality, UploadedImage } from '../types';
import SparklesIcon from './icons/SparklesIcon';

const ImageMode: React.FC = () => {
  const [personality, setPersonality] = useState<Personality>('Ingenioso');
  const [image, setImage] = useState<UploadedImage | null>(null);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!image) {
      setError('Por favor, sube una imagen.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setResponse('');
    try {
      const result = await generateImageResponse(image, personality);
      setResponse(result);
    } catch (err) {
      setError('Error al generar la respuesta. Por favor, inténtalo de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="image-mode">
      <h2>Genera una respuesta a una imagen</h2>
      <p>Sube una imagen de una historia o publicación para obtener una respuesta ingeniosa.</p>
      <ImageUploader onImageUpload={setImage} />
      <PersonalitySelector selected={personality} onSelect={setPersonality} />
      <button onClick={handleGenerate} disabled={isLoading || !image}>
         {isLoading ? 'Generando...' : <><SparklesIcon /> Generar</>}
      </button>
      {error && <p className="error-message">{error}</p>}
      <ResponseDisplay response={response} isLoading={isLoading} />
    </div>
  );
};

export default ImageMode;
