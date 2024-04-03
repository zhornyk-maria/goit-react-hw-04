import css from './ImageCard.module.css';

const ImageCard = ({image, openModal}) => {
    return (
        <div className={css.imageContainer} onClick={() => openModal(image)}>
            <img className={css.image} src={image.urls.small} alt={image.urls.alt_description} />
        </div>
    );
}

export default ImageCard;
