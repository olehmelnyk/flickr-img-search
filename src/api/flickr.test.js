import FlickrAPI from "./flickr";

describe('Flick API', () => {
    test('has access to Flickr API Key', () => {
        expect(FlickrAPI.config.apiKey).toBeDefined();
    });

    test('has access to Flickr API baseUrl', () => {
        expect(FlickrAPI.config.baseUrl).toBeDefined();
    });

    test('fetches data from Flickr API', async () => {
        const images = await FlickrAPI.getImagesByText('New York City');

        expect(images.stat).toBe('ok');
        expect(images.photos.photo.length).toBeGreaterThanOrEqual(1);
    });

    test('returns null if no query text passed', async () => {
        const images = await FlickrAPI.getImagesByText();

        expect(images).toBeNull();
    });
});
