import React from 'react';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  // For now, we directly render the Dashboard.
  // A future implementation could include routing to handle
  // login and callback screens.
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
