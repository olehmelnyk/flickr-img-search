import {prepareSearchText} from './index';

test('removes non alphanum characters and use plus symbol as word separator', () => {
    const rawText = 'Hello, world!';
    const praparedtext = prepareSearchText(rawText);

    expect(praparedtext).toBe('hello+world')
});
