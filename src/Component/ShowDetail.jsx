

import { useState, useEffect } from "react"
import DishComments from "./DishComments"

const ShowDetail = ({ match, history }) => {

    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        console.log('the id to look for is', match.params.movId)
        let id = match.params.movId
        let movToShow = this.state.movies.find(mov => mov.id.toString() === id)
        console.log(movToShow)
        setSelectedMovie(movToShow)
    }, [match.params.movId])

    return (
        <>
            {
                selectedMovie === null
                    ? <h1>LOADING...</h1>
                    : typeof selectedMovie === 'undefined'
                        ? <h1>404 - Movie NOT FOUND</h1>
                        : (
                            <div>
                                <h1>{selectedMovie.title}</h1>
                                <img onClick={() => history.push('/comments/' + selectedMovie.id)} src={selectedMovie.ima} alt="Movie pic"></img>
                                <DishComments selectedMovie={selectedMovie} />
                            </div>
                        )
            }
        </>
    )
}

export default ShowDetail