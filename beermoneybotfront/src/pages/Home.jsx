import React from 'react';
import FirstCard from '../components/FirstCard';
import Header from '../components/Header';
import TitleQueEs from '../components/TitleQueEs';
import Layout from '../containers/Layout';

const Home = () => {
    return(
        <Layout>
            <Header/>
            <FirstCard/>
            <TitleQueEs/>
        </Layout>
        
    );
}

export default Home;