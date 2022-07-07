import React, { useEffect, useState } from 'react'
import "./style.css"

export default function FirstFinal() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("City")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=47f2b766611ec242b37d8df16c614b1d`
            const response = await fetch(url)
            // console.log(response)
            const responseJson = await response.json()
            //console.log(responseJson)
             setCity(responseJson.main)
        }

        fetchApi()
    }, [search])
        return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} placeholder="Type your City/Country/State"
                    />
                </div>

                {!city ? (
                    <p className="realStatement">Data Not Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h1 className="location">
                                <i className="fa fa-street-view" aria-hidden="true"></i>
                                {search}
                            </h1>
                            <h1 className="temp">{city.temp}° Celsius </h1>
                            <h3 className="tempmin_max">
                                Min: {city.temp_min}° Celsius<br/>
                                Max: {city.temp_max}° Celsius<br/>
                                Feels Like {city.feels_like}° Celsius<br/>
                                Pressure {city.pressure} mb
                            </h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )}



            </div>
            </>
    )
}

