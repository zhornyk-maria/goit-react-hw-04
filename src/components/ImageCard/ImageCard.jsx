
const ImageCard = ({image}) => {
    return (
        <div>
            <img width={250} src={image.urls.small} alt={image.urls.alt_description} />
        </div>
    );
}

export default ImageCard;