import React from 'react'
import {Link} from 'react-router-dom'
const MovieCard = ({movie}) => {
    return (
        <div  className="App" style = {{display: 'block',textAlign:'left',paddingTop:'50px',justifyContent: 'center'}}>
            <Link style={{color: 'blue', fontSize: '30px',paddingLeft:'50px',paddingTop:'50px',fontStyle:"oblique"}} to ={`/movieDescription/${movie.id}`}>Go to </Link>
           <h5 style={{color: 'green', fontSize: '35px'}}>{movie.title}</h5>
            <img className="image" src ={movie.posterUrl} width="30%" height="10%"alt/>
            <h6 style={{display:"block",fontSize:"25px",color:"black",textAlign:"left",fontStyle:"oblique",alignItems:"baseline",justifyContent:"end"}} >{movie.description}</h6>
            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/z2z857RSfhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
            </div> 
        </div>
    )
}

export default MovieCard