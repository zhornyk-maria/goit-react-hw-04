import ImageCard from '../ImageCard/ImageCard.jsx';

const ImageGallery = ({images}) => {
    return(
        <>
            <ul>
                {images !== null && images.map(image => (
                    <li key={image.id}>
                        {/* <Contact {...contact} onDeleteContact={onDeleteContact} /> */}
                        <ImageCard {...image} />
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ImageGallery;