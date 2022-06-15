import React from 'react';
import ShowCard from './ShowCard';

function ShowList( {allShows , myShows , setMyShows , deleteShow}) {
    
    function addShow(title) {
        if (myShows.filter((show)=>{
            return show.name.toUpperCase().trim()===title.toUpperCase().trim()
        }).length === 0) {
        
        let showToAdd = allShows.filter((show)=>{
            return show.name.toUpperCase().trim()===title.toUpperCase().trim()
        })[0]
        setMyShows([ ...myShows , showToAdd])

        }
    }
    
    return(
        <div className="show-container">
            {allShows.map(show=>{
                return <ShowCard key={show.id} show={show} onShowClicked={addShow} onShowDelete={deleteShow}/>
            })}
        </div>
    );
}

export default ShowList;