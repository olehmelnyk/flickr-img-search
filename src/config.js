/*

http://www.herongyang.com/Free-Web-Service/Flickr-Image-Source-URL-of-Different-Size.html

Each [image size] suffix letter represents a different photo size:
s - Specifies the small square size of 75x75 pixels.
t - Specifies the thumbnail size with 100 pixels on the longest side.
m - Specifies the medium size with 240 pixels on the longest side.
z - Specifies the medium size with 640 pixels on the longest side.
b - Specifies the large size with 1024 pixels on the longest side.

*/

const config = {
    api: {
        flickr: {
            baseUrl: 'https://www.flickr.com/services/rest',
            apiKey: '6b3575d10435de5f010fc941f5eff94a',
            format: 'json',
            imageSize: 'b'
        }
    }
};

export default config;