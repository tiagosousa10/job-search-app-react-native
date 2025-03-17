import {useState, useEffect} from 'react'
import axios from 'axios'

const useFecth = (endpoint, query) => {
  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'x-rapidapi-key': '180af2010cmshea5ba1a8a19c079p12c106jsn3c408d224c2c',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options) // make the request

      setData(response.data.data)

    } catch(error) {
      setError(error)
      alert("Something went wrong")
      console.log("Error fetching data",error)

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(( ) => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return {
    data, isLoading, error, refetch
  }
}

export default useFecth;
