import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { Component } from 'react';

import styles from './Styles.module.css'
import { ToastContainer } from 'react-toastify';

class App extends Component{

  state = {
    text: "",
  }
  handleSubmitData = text => {
    
    this.setState({ text });
  } 

  render() {
    return (
      <div className={styles.app}>
        <SearchBar onSubmit={this.handleSubmitData} />
        <ImageGallery />
        <Button />
        <ToastContainer autoClose={3000} position='top-right'/>
      </div>
    );
  }
};

export default App;