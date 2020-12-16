import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images }) {
    return (
        <ul className="ImageGallery">
            {images.map(({ id, webformatURL, tag, largeImageURL }) => (
                <li key={id} className="ImageGalleryItem">
                    <ImageGalleryItem
                        webformatURL={webformatURL}
                        tag={tag}
                        largeImageURL={largeImageURL}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;
