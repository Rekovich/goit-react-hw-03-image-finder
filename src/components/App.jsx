import { Notify } from 'notiflix';
import { Component } from 'react';
import { fetchPhotos } from 'servises/fetchPhotos';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import css from '../index.css';

class App extends Component {
  state = {
    isLoaded: false,
    query: '',
    images: [],
    page: 1,
    totalHitsPage: null,
  };

  async componentDidUpdate(_, prevState) {
    // if (!this.state.isLoaded) {
    //   return;
    // }
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const images = await fetchPhotos({
          query: this.state.query,
          page: this.state.page,
        });
        if (images.totalHitsPage === 0) {
          Notify.failure('Please write something');
        }

        this.setState({
          images: [...this.state.images, ...images.hits],
          isLoaded: false,
          // totalHitsPage: images.totalHitsPage,
        });
      } catch (error) {
        // return error
      }  
        this.setState({ isLoaded: false });
      
    }
  }

  handleSubmit = query => {
    this.setState({
      page: 1,
      query: query,
      images: [],
      isLoaded: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoaded: true,
    }));
  };
  render() {
    const { images, isLoaded, totalHitsPage } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoaded && <Loader />}
        <ImageGallery images={images} />
        {images.length > 0 && images.length !== totalHitsPage && !isLoaded && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
