import React from 'react';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      Hey
    </div>
  );
}

export default App;
