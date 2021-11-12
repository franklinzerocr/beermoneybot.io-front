import React from 'react';
import FirstCard from '../components/FirstCard';
import TitleSucribete from '../components/TitleSuscribete';
import Layout from '../containers/Layout';
import Header from '../components/Header';
import QueEs from './QueEs'
import ComoOpera from './ComoOpera';
import ComoUsar from './ComoUsar';
import Comprueba from './CompruebaResultados';

const Home = () => {
    return(
        <Layout>
            <Header/>
            <FirstCard/>
            <QueEs/>
            <ComoOpera/>
            <ComoUsar/>
            <Comprueba/>
            <TitleSucribete/>
        </Layout>
        
    );
}

export default Home;