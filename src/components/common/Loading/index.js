import React from 'react';

const Loading = ({loading, loadingText="Loading..."}) => loading && <p className="center">{loadingText}</p>;

export default Loading;