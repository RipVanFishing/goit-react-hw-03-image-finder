function FetchImg(name, page) {
    return fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=25477224-484b864fbd655a75604639e30&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
      if (response.ok) {
        return response.json();
      }
  
      return Promise.reject(new Error(`Нет картинки с именем ${name}`));
    });
  }
  
  
  const api = {
    FetchImg,
  }; 

  export default api;