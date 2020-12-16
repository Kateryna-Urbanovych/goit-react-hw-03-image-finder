import { PureComponent } from 'react';

import pixabayAPI from '../../servises/pixabay-api';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import LoaderSpinner from '../LoaderSpinner';

class SearchInfo extends PureComponent {
    state = {
        status: 'idle',
        images: [],
        error: null,
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevImageValue = prevProps.imageValue;
        const nextImageValue = this.props.imageValue;
        const { page } = this.state;

        // console.log(this.state.page);

        if (prevImageValue !== nextImageValue || prevState.page !== page) {
            this.setState({ status: 'pending' });

            if (prevImageValue !== nextImageValue) {
                this.setState({
                    images: [],
                    page: 1,
                });
            }

            pixabayAPI
                .fetchImage(nextImageValue, page)
                .then(images => {
                    console.log('images.hits', images.hits);
                    // console.log('this.state.images', this.state.images);

                    if (images.hits.length === 0) {
                        return Promise.reject(
                            new Error(
                                `No images found on request ${nextImageValue}`,
                            ),
                        );
                    }

                    this.setState(prevState => ({
                        images: [...prevState.images, ...images.hits],
                        status: 'resolved',
                    }));

                    // Как-то ненормально перематывается!!!
                    this.scroll();
                })
                .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }

    updatePage = () => {
        console.log(this.state.page);

        this.setState(prevState => ({
            page: prevState.page + 1,
        }));
    };

    scroll = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight - 1500,
            behavior: 'smooth',
        });
    };

    render() {
        const { status, error, images } = this.state;

        if (status === 'idle') {
            return <p className="idleText">What are we looking for?</p>;
        }

        if (status === 'pending') {
            return <LoaderSpinner />;
        }

        if (status === 'resolved') {
            // console.log(images);
            return (
                <>
                    <ImageGallery images={images} />
                    <Button onClick={this.updatePage} />
                </>
            );
        }

        if (status === 'rejected') {
            return <p className="rejectedText">{error.message}</p>;
        }
    }
}

export default SearchInfo;
