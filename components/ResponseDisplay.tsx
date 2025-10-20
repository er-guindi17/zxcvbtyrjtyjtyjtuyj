import React from 'react';
import InstagramDM from './InstagramDM';

interface Props {
  response: string;
  isLoading: boolean;
}

const ResponseDisplay: React.FC<Props> = ({ response, isLoading }) => {
  if (isLoading) {
    return (
      <div className="response-display loading">
        <div className="spinner"></div>
        <p>Creando el DM perfecto...</p>
      </div>
    );
  }

  if (!response) {
    return null;
  }

  return (
    <div className="response-display">
      <h3>Tu DM Generado:</h3>
      <InstagramDM message={response} />
    </div>
  );
};

export default ResponseDisplay;
