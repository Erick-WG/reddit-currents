import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from './SearchSlice'

const Search = () => {
  const dispatch = useDispatch()

  // data
  const searchRef = useRef(null)    

    // handler search.
    const handleSearch = (e) => {
      e.preventDefault()
      if(searchRef.current.value !== '' && searchRef.current.value !== null){
        dispatch(setSearchTerm(searchRef.current.value))
        searchRef.current.value = ''
      } else return
    }
    
  return (
    <div className='flex flex-row gap-2 w-full justify-center'>
        <input 
          type="text"
          name="Search"
          ref={searchRef}
          className="bg-gray-600/50 focus:bg-gray-500/50 active:bg-gray-500/50 text-white p-2 w-10/12 rounded-bl-lg rounded-tl-lg outline-none border-2 border-gray-500/50 max-w-2xl" 
          placeholder="Search..."/>
        
        <button 
          className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded-br-lg rounded-tr-lg"
          type='submit'
          onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
