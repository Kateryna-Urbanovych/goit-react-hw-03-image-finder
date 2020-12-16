import { PureComponent } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SearchForm extends PureComponent {
    state = {
        imageValue: '',
    };

    handleImageValueChange = event => {
        this.setState({ imageValue: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imageValue.trim() === '') {
            return toast.info('Please, write some request');
        }

        this.props.onSubmit(this.state.imageValue);
        // По превью дз запрос остается!!!
        // this.setState({ imageValue: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.imageValue}
                    onChange={this.handleImageValueChange}
                />
            </form>
        );
    }
}

export default SearchForm;
