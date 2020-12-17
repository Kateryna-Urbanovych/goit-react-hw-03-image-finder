import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ images }) {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL, tag, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tag={tag}
                    largeImageURL={largeImageURL}
                />
            ))}
        </ul>
    );
}

export default ImageGallery;
