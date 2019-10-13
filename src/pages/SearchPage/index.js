import React, {Component} from 'react';

import Flickr from '../../api/flickr'
import {debounce} from '../../helpers'

import Header from '../../hoc/Header';
import Main from '../../hoc/Main';
import Footer from '../../hoc/Footer';
import Loading from '../../components/common/Loading';
import ImageGrid from '../../components/ImageGrid';

import './index.css'

class SearchPage extends Component {
    state = {
        loading: false,
        imageList: [],
        search: ''
    };

    onChange = ({target: {name, value}}) => {
        this.setState({[name]: value});

        if (name === 'search') {
            this.onSearchInputChange(value);
        }
    };

    onSearchInputChange = text => {
        if (!text || !text.trim()) {
            this.setState({imageList: []});
            return
        }

        debounce(this.fetchImages(text), 5000);
    };

    fetchImages = async text => {
        this.setState({loading: true, imageList: []});

        const images = await Flickr.getImagesByText(text);
        const {photos: {photo: imageList}} = images;

        if (imageList) {
            this.setState({imageList, loading: false});
        }
    };

    render(){
        const {loading, imageList, search} = this.state;

        return (
            <>
                <Header>
                    <input
                        type='search'
                        name='search'
                        className='search-input'
                        value={search}
                        onChange={this.onChange}
                        placeholder='Image search...'
                        autoFocus
                        autoComplete="off"

                    />
                </Header>
                <Main>
                    <Loading loading={loading} loadingText='Fetching images...' />
                    <ImageGrid imageList={imageList}/>
                </Main>
                <Footer />
            </>
        )
    };
}

export default SearchPage;