import React, { Component } from 'react'
import css from './ImageGalleryItem.module.css'

export default class ImageGalleryItem extends Component {
    

showModal = (e) => {
    this.props.showModal(this.props.largeImg)
}




  render() {
    return (
        <li className={css.ImageGalleryItem}>
                <img src={this.props.URL} alt={this.props.alt} onClick={this.showModal} className={css.ImageGalleryItem_image} />
        </li>
    )
  }
}