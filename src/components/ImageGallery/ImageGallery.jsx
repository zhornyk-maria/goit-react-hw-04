import { useState } from 'react'; 
import ImageCard from '../ImageCard/ImageCard.jsx';

const ImageGallery = ({ images }) => {
    const [isLoading, setIsLoading] = useState(false);

    return(
        <>
            {isLoading && <p>Loading...</p>}
            <ul>
                {images && images.map(image => {
                    return (
                        <li key={image.id}>
                            <ImageCard image={image} />
                        </li>
                    );
                })}
            </ul>
        </>
    )
};

export default ImageGallery;