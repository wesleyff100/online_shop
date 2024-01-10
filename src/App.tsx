import { useState } from 'react';

import LoginScreen from './modules/login';

function App() {
  const [count] = useState(0);

  return <LoginScreen />;
}

export default App;
