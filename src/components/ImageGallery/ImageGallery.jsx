import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';

const ImageGallery = ({ images, openModal }) => {

    return(
        <>
            <ul className={css.gallery}>
                {Array.isArray(images) && images.map((image) => {
                    return (
                        <li key={image.id} className={css.galleryItem}>
                            <ImageCard image={image} openModal={openModal} />
                        </li>
                    );
                })}
            </ul>
        </>
    )
};

export default ImageGallery;