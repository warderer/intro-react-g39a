import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import SearchBar from './components/SearchBar'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY

  const sendSearch = async (searchTerm) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    )
    const results = await response.json()
    setGifs(results.data)
  }

  useEffect(() => {
    const fetchGifs = async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`
      )
      const results = await response.json()
      setGifs(results.data)
    }

    fetchGifs()
  }, [])

  return (
    <>
      <h1>Giphy App</h1>
      <div className='app'>
        <SearchBar handleSearch={sendSearch} />
        <div className='grid-cards'>
          {
            gifs.map(gif => (
              <ImageCard
                key={gif.id}
                url={gif.images.fixed_height.url}
                title={gif.title}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
