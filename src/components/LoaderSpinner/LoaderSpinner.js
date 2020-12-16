import { PureComponent } from 'react';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class LoaderSpinner extends PureComponent {
    render() {
        return (
            <Loader
                type="BallTriangle"
                color="#3f51b5"
                height={200}
                width={200}
                className="loaderSpinner"
            />
        );
    }
}

export default LoaderSpinner;
