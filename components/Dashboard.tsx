import React, { useState } from 'react';
import Header from './Header';
import ImageMode from './ImageMode';
import IcebreakerMode from './IcebreakerMode';
import ImageIcon from './icons/ImageIcon';
import IceIcon from './icons/IceIcon';

type Mode = 'image' | 'icebreaker';

const Dashboard: React.FC = () => {
  const [mode, setMode] = useState<Mode>('icebreaker');

  return (
    <div className="dashboard-container">
      <Header />
      <main className="main-content">
        <div className="mode-selector">
          <button onClick={() => setMode('icebreaker')} className={mode === 'icebreaker' ? 'active' : ''}>
            <IceIcon /> Rompehielos
          </button>
          <button onClick={() => setMode('image')} className={mode === 'image' ? 'active' : ''}>
            <ImageIcon /> Modo Imagen
          </button>
        </div>
        {mode === 'icebreaker' && <IcebreakerMode />}
        {mode === 'image' && <ImageMode />}
      </main>
    </div>
  );
};

export default Dashboard;
