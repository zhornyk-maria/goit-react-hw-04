import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';

function App() {
  const [images, setImages] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/?client_id=OlHWRmKxn7vjqXZKE1jcmlc46V7_l_EZ6-G9ALlu5AU');
        setImages(response.data.map(image => image.urls));
        console.log('data', response);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <ImageGallery {...images} />
      <SearchBar />
    </>
  )
}

export default App;
