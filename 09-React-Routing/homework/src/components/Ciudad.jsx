import React from 'react';

export default function Ciudad({ciudad}){
    
    if(!ciudad){
        alert("la ciudad no encontrada");
        return(
            <div>La ciudad no encontrada</div>
        )
    }
    return (
        <div className="ciudad">
            <div className="container">
                <h2>{ciudad.name}</h2>
                <div className="info">
                    <div>Temperatura: {ciudad.temp} ºC</div>
                    <div>Clima: {ciudad.weather}</div>
                    <div>Viento: {ciudad.wind} km/h</div>
                    <div>Cantidad de nubes: {ciudad.clouds}</div>
                    <div>Latitud: {ciudad.latitud}º</div>
                    <div>Longitud: {ciudad.longitud}º</div>
                </div>
            </div>
        </div>
    );
};