import Searchbar from 'components/Searchbar';
import { Component } from 'react';
import * as API from '../../services/PixabayApi';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery';

class App extends Component{

  state = {
    searchName : '',
    images: [],
    currentPage: 1,
    totalPages: 0,
    error: null,
    isLoading: false,
  };

  handleSubmit = data => {
    this.setState({
      searchName: data,
      images: [],
      currentPage: 1,
    });
  };

  render() {
    const { images } = this.state;

    return (
          <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images}/>
            <ToastContainer />
          </div>
    );
  };
};

export default App;
