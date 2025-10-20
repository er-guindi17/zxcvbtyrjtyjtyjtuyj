import React, { useEffect } from 'react';

const Callback: React.FC = () => {
  useEffect(() => {
    // In a real application, this component would handle the redirect from
    // an OAuth provider like Discord. It would parse the authorization code
    // from the URL, send it to a backend service to exchange it for an
    // access token, and then redirect the user to the main application.
    console.log('Callback component mounted. In a real app, this would handle OAuth redirect.');
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Processing login...</p>
    </div>
  );
};

export default Callback;
