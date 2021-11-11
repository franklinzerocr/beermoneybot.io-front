import React from 'react';
import FirstCard from '../components/FirstCard';
import Header from '../components/Header';
import TitleComoOpera from '../components/TitleComoOpera';
import TitleComoUsar from '../components/TitleComoUsar';
import TitleComprueba from '../components/TitleComprueba';
import TitleQueEs from '../components/TitleQueEs';
import TitleSucribete from '../components/TitleSuscribete';
import Layout from '../containers/Layout';

const Home = () => {
    return(
        <Layout>
            <Header/>
            <FirstCard/>
            <TitleQueEs/>
            <TitleComoOpera/>
            <TitleComoUsar/>
            <TitleComprueba/>
            <TitleSucribete/>
        </Layout>
        
    );
}

export default Home;