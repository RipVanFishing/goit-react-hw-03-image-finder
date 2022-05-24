import Modal from "components/Modal";
import ImageGalleryItem from "components/ImageGalleryItem";
import React from "react";
import css from './ImageGallery.module.css'

 const ImageGallery = () => {
    return (
        <ul className={css.imageGallery}>
            <ImageGalleryItem />
            <Modal/>
    </ul>
    )
}

export default ImageGallery;