import config from "../config";
import {prepareSearchText} from '../helpers'

class Flickr {
    constructor(config) {
        this.config = config;
    }

    getImagesByText = async (text) => {
        if (!text || typeof text !== 'string' || !text.trim()) {
            return null;
        } else {
            try{
                const searchString = prepareSearchText(text);
                const {baseUrl, apiKey, format} = this.config;
                const url = `${baseUrl}/?method=flickr.photos.search&api_key=${apiKey}&text=${searchString}&format=${format}&nojsoncallback=1`;
                const request = await fetch(url);

                return await request.json();
            }catch (e) {
                console.error(e);
                return null;
            }
        }
    };
}

const FlickrAPI = new Flickr(config.api.flickr);

export default FlickrAPI;