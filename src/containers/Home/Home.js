import React from 'react';
import content from './README.md';
import styles from './Home.styl';

const Home = () => <div dangerouslySetInnerHTML={{ __html: content }} />;

export default Home;
