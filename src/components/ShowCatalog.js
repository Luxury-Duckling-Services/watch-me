import React , {useState , useEffect} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [allShows , setAllShows] = useState([])
    const [myShows , setMyShows] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8081/shows')
        .then(r=>r.json())
        .then(list=>{
            setAllShows(list)
        })
    },[])

    function deleteShow(title) {
        setAllShows(allShows.filter( show=>{
            return !(show.name.toUpperCase().trim()===title.toUpperCase().trim())
        }))
        setMyShows( myShows.filter( show=>{
            return !(show.name.toUpperCase().trim()===title.toUpperCase().trim())
        }))
    }

    return(
        <>
            <MyWatchList myShows={myShows} setMyShows={setMyShows} deleteShow={deleteShow}/>
            <hr/>
            <ShowList allShows={allShows}setAllShows={setAllShows} myShows={myShows} setMyShows={setMyShows} deleteShow={deleteShow}/>
        </>
    );
}

export default ShowCatalog;