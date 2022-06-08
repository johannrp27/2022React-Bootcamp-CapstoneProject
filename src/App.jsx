import React from 'react';
import Home from './views/Home';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading } = useFeaturedBanners();

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
