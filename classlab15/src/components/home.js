import React from 'react';
import imgperson from '../image/person.jpg';

const Home = function(){
    return(
        <>
            <header className = "header">
                <h1 className = "headertitle">Homepage</h1>
            </header>
            <main className = "maincontainer"> 
                <div>
                    <img src = {imgperson} />
                </div>
            </main>
        </>
    )
}

export default Home;