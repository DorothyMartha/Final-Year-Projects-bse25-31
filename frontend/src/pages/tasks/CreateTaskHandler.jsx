import React from 'react';
import MainTaskDetailsPage from './taskDetails/MainTaskDetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tasks from './Tasks';


export default function App() {
    return (
        <>
            <MainTaskDetailsPage />
            <Tasks />
        </>
    );
}