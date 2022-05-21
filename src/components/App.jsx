import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';

import styles from './Styles.module.css'

export const App = () => {
  return (
    <div className={styles.app}>
      <SearchBar />
      <ImageGallery/>
    </div>
  );
};
