import Searchbar from 'components/Searchbar';
import { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component{

  render() {
    return (
          <div>
            <Searchbar/>
            <ToastContainer />
          </div>
    );
  };
};

export default App;
