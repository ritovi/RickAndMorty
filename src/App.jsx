import { useEffect, useState } from 'react'
import './App.css'
import Crud from './JavaScript/Crud'
import Random from './JavaScript/getRandom'
import Base from './Components/Base/Base'
import Residents from './Components/Residents/Residents'
import FormSearch from './Components/FormSearch/FormSearch'

function App() {
  const [count, setCount] = useState(0)
  const getLocation = Random(126);

  const [otra, setOtra] = useState(getLocation);
  const url = `https://rickandmortyapi.com/api/location/${otra || getLocation}` //pa que no cambie  hehe
  const [data, getA, errorH] = Crud(url);

  useEffect(() => {
    getA("");
  }, [otra])

  console.log(data)

  return (
    <div className='app'>
      <div className='app__header'>
          <h1 className='app__title'>Rick and Morty</h1>
      </div>
     
      <FormSearch setOtra={setOtra} />
      {
        errorH ? <h2 className='app__error'>You must provide an id from 1 to 126 🥶
        </h2>
          : (
            <> <Base data={data} />

              <div className='app__resident'>
                {
                  data?.residents.map((url) => {
                    return (
                      <Residents key={url} url={url} />
                    )
                  })
                }
              </div></>

          )
      }

    </div>
  )
}

export default App
