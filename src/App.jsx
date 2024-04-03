import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import { requestImagesByQuery } from './services/api.js';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasMoreImages, setHasMoreImages] = useState(false);

  useEffect(() => {
    if (query.length === 0) return;
    
    async function fetchImagesByQuery() {
      try {
        setIsLoading(true);
        const data = await requestImagesByQuery(query, page);
        setImages(prevImages => [...prevImages, ...data.results]);
        setIsError(false);
        setHasMoreImages(data.total_pages > 1);
      } catch (error) {
        setIsError(true);
        setHasMoreImages(false);
      } finally { 
        setIsLoading(false);
      }
    }
    fetchImagesByQuery();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1);
    setSelectedImage(null);
  }

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  const openModal = (image) => {
      setSelectedImage(image);
  };

  return (
    <>
      <Toaster /> 
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} openModal={openModal}/>}
      {selectedImage && <ImageModal image={selectedImage} closeModal={() => setSelectedImage(null)} />}
      {isLoading && <Loader />}
      {hasMoreImages && <LoadMoreBtn onLoadMore={onLoadMore} hasMoreImages={hasMoreImages} />}
    </>
  )
}

export default App;
