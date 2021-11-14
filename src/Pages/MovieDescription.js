import React from 'react'
import {useParams} from 'react-router-dom'
const MovieDescription = ({movies}) => {
    const {MovieId} = useParams()
    const foundMovie = movies.find(el=>el.id=== MovieId)
    return (
        <>
        <div className="desc">{foundMovie.description} </div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/z2z857RSfhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )
}

export default MovieDescription