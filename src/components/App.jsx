import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';

import styles from './Styles.module.css'

export const App = () => {
  return (
    <div className={styles.app}>
      <SearchBar />
      <ImageGallery />
      <Button/>
    </div>
  );
};
