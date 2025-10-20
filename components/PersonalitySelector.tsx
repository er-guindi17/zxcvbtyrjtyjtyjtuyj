import React from 'react';
import { Personality } from '../types';

interface Props {
  selected: Personality;
  onSelect: (personality: Personality) => void;
}

const personalities: Personality[] = ['Ingenioso', 'Romántico', 'Atrevido', 'Misterioso', 'Amigable'];

const PersonalitySelector: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <div className="personality-selector">
      <label>Selecciona una personalidad:</label>
      <div className="personalities">
        {personalities.map((p) => (
          <button
            key={p}
            className={selected === p ? 'active' : ''}
            onClick={() => onSelect(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PersonalitySelector;
