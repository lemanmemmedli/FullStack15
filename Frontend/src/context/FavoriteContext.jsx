import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export let FavoriteContext=createContext()
function FavoriteProvider({children}) {

    let localfavorite=localStorage.getItem("favorite")
    let [favorites,setFavorites]=useState(localfavorite ? JSON.parse(localfavorite) : [])

    useEffect(()=>{
        localStorage.setItem("favorite",JSON.stringify(favorites))
    },[favorites])
 
    let value={
        favorites,setFavorites

    }
  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  )
}

export default FavoriteProvider