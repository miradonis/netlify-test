import React, { useState, useEffect } from 'react';
import './Fetch.css';



const Fetch = () => {
    const [country, setCountry] = useState('berlin');
    const [Data, setData] = useState();
    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=9733f699725f8f0e46844c1dcd6c1394&units=metric&lang=de`;



    const chooseDuesseldorf = () => {
        setCountry('düsseldorf')
    }

    const chooseKoeln = () => {
        setCountry('köln')
    }

    const chooseBerlin = () => {
        setCountry('berlin')
    }

    const chooseHamburg = () => {
        setCountry('hamburg')
    }

    useEffect(() => {
        fetch(weatherEndpoint)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
    }, [country]);

    if (Data === undefined) {
        return;
    }

    return (
        <section>
            <div className='divWeather'>
                <div className='chooseCountry'>
                    <button type='button' onClick={chooseDuesseldorf}>Düsseldorf</button>
                    <button type='button' onClick={chooseKoeln}>Köln</button>
                    <button type='button' onClick={chooseBerlin}>Berlin</button>
                    <button type='button' onClick={chooseHamburg}>Hamburg</button>
                </div>
                <div className='outputDates'>
                    <div className='clouds'>
                        <p>{Data.weather[0].description} in {Data.name}</p>
                        <img src={`http://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`} />
                    </div>
                    <p className='currentW'>{`Aktuell: ${Data.main.temp}°`}</p>
                    <p>{`Windg.: ${Data.wind.speed} mi/hr`}</p>
                </div>
            </div>
        </section>
    );
}

export default Fetch;