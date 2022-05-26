
import { Grid } from "react-loader-spinner";
import Modal from "components/Modal";
import ImageGalleryItem from "components/ImageGalleryItem";
import React, { Component } from "react";
import css from './ImageGallery.module.css'



class ImageGallery extends Component {

    state = {
        collection: null,
        error: '',
        status: 'idle'
    }
     
    componentDidUpdate(prevProps, prevState) {
        console.log(this.props)
        const KEY = '25477224-484b864fbd655a75604639e30';
        const BASE_URL = `https://pixabay.com/api/?q=${this.props.text}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        
        if (prevProps.data !== this.props.data) {
            this.setState({status: 'pending'})
            return fetch(BASE_URL).then(res => res.json()).then(collection => this.setState({ collection }))
         
        }
        console.log(this.state.collection)
    }
   
    render() {
        const { collection, error, status } = this.state;
        if (status === 'idle') {
            return <h1> Что будем искать?..</h1>
        }
       
        if (status === "pending") {
            return <Grid />
        }
        if (status === 'rejected') {

        }
         if (status === "resolve") {
            return <ul className={css.imageGallery}>
              <ImageGalleryItem />
            </ul>
        }

    }
      
}
export default ImageGallery;