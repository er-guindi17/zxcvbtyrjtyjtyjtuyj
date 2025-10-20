import React, { useState } from 'react';
import PersonalitySelector from './PersonalitySelector';
import ResponseDisplay from './ResponseDisplay';
import { generateIcebreaker } from '../services/geminiService';
import { Personality } from '../types';
import SparklesIcon from './icons/SparklesIcon';

const IcebreakerMode: React.FC = () => {
  const [personality, setPersonality] = useState<Personality>('Ingenioso');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setError(null);
    setIsLoading(true);
    setResponse('');
    try {
      const result = await generateIcebreaker(personality);
      setResponse(result);
    } catch (err) {
      setError('Error al generar la respuesta. Por favor, inténtalo de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="icebreaker-mode">
      <h2>Generar un Rompehielos</h2>
      <p>Haz clic en el botón para obtener una frase única para iniciar una conversación.</p>
      <PersonalitySelector selected={personality} onSelect={setPersonality} />
      <button onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? 'Generando...' : <><SparklesIcon /> Generar</>}
      </button>
      {error && <p className="error-message">{error}</p>}
      <ResponseDisplay response={response} isLoading={isLoading} />
    </div>
  );
};

export default IcebreakerMode;
