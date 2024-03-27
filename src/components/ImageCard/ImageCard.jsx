
const ImageCard = ({image}) => {
    return (
        <div>
            <img width={250} src={image.urls} alt="" />
        </div>
    );
}

export default ImageCard;