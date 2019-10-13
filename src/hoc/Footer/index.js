import React from 'react'

const Footer = ({children}) => <footer>
    <div className="container">
        {children}
        <p className="center">&copy; {new Date().getFullYear()}. All rights reserved.</p>
        <p className="center">All images belongs to it's authors @ Flickr.com</p>
    </div>
</footer>;

export default Footer;