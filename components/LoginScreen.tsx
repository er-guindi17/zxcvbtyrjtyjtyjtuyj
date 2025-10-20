import React from 'react';
import DiscordIcon from './icons/DiscordIcon';
import LogoIcon from './icons/LogoIcon';

const LoginScreen: React.FC = () => {
  const handleLogin = () => {
    // In a real app, this would redirect to your Discord OAuth URL
    alert('Login with Discord clicked!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', textAlign: 'center' }}>
        <LogoIcon />
        <h1>Welcome to InstaGenius</h1>
        <p>Your AI-powered Instagram DM assistant</p>
        <button onClick={handleLogin} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', cursor: 'pointer' }}>
            <DiscordIcon />
            Login with Discord
        </button>
    </div>
  );
};

export default LoginScreen;
