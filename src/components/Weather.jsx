import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { weatherReducer } from '../reducers/weatherReducer'

function Weather() {
  const queryParams = {
    serviceKey: process.env.REACT_APP_SERVICE_KEY,
    pageNo: 1,
    numOfRows: 100,
    dataType: 'JSON',
    base_date: '20220805',
    base_time: '0500',
    nx: 55,
    ny: 127,
  }

  const [state, dispatch] = useReducer(weatherReducer, {
    loading: false,
    data: null,
    error: null,
  })

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const response = await axios.get(
        '1360000/VilageFcstInfoService_2.0/getVilageFcst',
        { params: queryParams },
      )
      dispatch({
        type: 'SUCCESS',
        data: response.data['response']['body']['items']['item'],
      })
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const { loading, data: weather, error } = state

  if (loading) return <p>로딩중</p>
  if (error) return <p>{error}</p>
  return (
    <div>
      {weather &&
        weather.map((element) => {
          return (
            <p>
              {element.category},{element.fcstDate},{element.fcstTime},
              {element.fcstValue}
            </p>
          )
        })}
    </div>
  )
}

export default Weather
