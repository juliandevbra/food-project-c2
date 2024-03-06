import { useEffect, useState } from 'react'

const Pet = () => {

    const url = 'https://dog.ceo/api/breeds/image/random'
    const url2 = 'https://api.thecatapi.com/v1/images/search' 

    const [petImg, setPetImg] = useState('')
    const [apiCall, setApiCall] = useState(url)
    const [loading, setLoading] = useState(false)
    console.log(apiCall)
    console.log('Se ejecutó pet', petImg)

    useEffect(() => {
        setLoading(false)
        fetch(apiCall)
        .then(res => res.json())
        .then(data => {
          console.log(Array.isArray(data))
            if(Array.isArray(data)){
              setLoading(true)
              setPetImg(data[0].url)
            } else {
              setLoading(true)
              setPetImg(data.message)
            }
        })
        .catch(err => console.log(err))
    }, [apiCall])
   
  return (
    <div>
      <button onClick={() => setApiCall(apiCall === url ? url2 : url)}>Switch API</button>
      {loading ? <img src={petImg} alt="" className='imagen'/> : 'Cargando...' }
        
    </div>
  )
}

export default Pet