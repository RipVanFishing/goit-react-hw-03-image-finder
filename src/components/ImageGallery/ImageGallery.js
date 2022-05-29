
import { Grid } from "react-loader-spinner";
import Modal from "components/Modal";
import ImageGalleryItem from "components/ImageGalleryItem";
import React, { Component } from "react";
import css from './ImageGallery.module.css'



class ImageGallery extends Component {

    state = {
        hits: null,
        error: '',
        status: 'idle'
    }
     
    componentDidUpdate(prevProps, prevState) {
        
        const KEY = '25477224-484b864fbd655a75604639e30';
        const BASE_URL = `https://pixabay.com/api/?q=${this.props.data}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
       
       

        if (prevProps.data !== this.props.data) {
            this.setState({ status: 'pending' })
            return fetch(BASE_URL).then(res => {
                if (res.ok) {
                   
                    return res.json();
                }
                return Promise.reject(new Error(`${this.props.data} не существует на нашем сайте`));
            }).then(console.log)
            .then(hits => this.setState({ hits, status: 'resolve' })).then(console.log(this.state.hits)).catch(error => this.setState({ error, status: 'rejected' }))
         
        }
        
    }
   
    render() {
        const { hits, error, status } = this.state;
        if (status === 'idle') {
            return <h1> Что будем искать?..</h1>
        }
       
        if (status === "pending") {
            return <Grid height={24} width={24} color='red' />
        }
        if (status === 'rejected') {
            return <h1> {error.message}</h1>
        }
         if (status === "resolve") 
             return <ul className={css.imageGallery}>
                 {/* {this.state.hits.map(img => <ImageGalleryItem key={img.id} URL={img.webformatURL}
                     largeImg={img.largeImageURL} alt={this.props.imgName} showModal={this.showModal} />)
                 } */}
            </ul>
        }

    }
      

export default ImageGallery;