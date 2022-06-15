import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList( {myShows , setMyShows , deleteShow } ) {

    function removeShow(title) {
        setMyShows( myShows.filter((show)=>{
            return !(show.name.toUpperCase().trim()===title.toUpperCase().trim() )
        }) )
    }

    return(
        <div className="watch-list-container">
            {myShows.map(show=>{
                return <ShowCard key={show.id} show={show} onShowClicked={removeShow} onShowDelete={deleteShow}/>
            })}
        </div>
    )
}

export default MyWatchList;