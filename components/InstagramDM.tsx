import React, { useState } from 'react';
import ClipboardIcon from './icons/ClipboardIcon';

interface Props {
  message: string;
}

const InstagramDM: React.FC<Props> = ({ message }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="instagram-dm-container">
      <div className="instagram-dm">
        <div className="message-bubble">{message}</div>
      </div>
      <button onClick={handleCopy} className="copy-button">
        <ClipboardIcon />
        {copied ? '¡Copiado!' : 'Copiar al portapapeles'}
      </button>
    </div>
  );
};

export default InstagramDM;
