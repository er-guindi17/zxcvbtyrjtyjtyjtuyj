import React from 'react';
import LogoIcon from './icons/LogoIcon';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <LogoIcon />
      <h1>InstaGenius</h1>
      <p>Tu asistente de DMs de Instagram con IA</p>
    </header>
  );
};

export default Header;
