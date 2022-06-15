import React from 'react';

function ShowCard({show, onShowClicked, onShowDelete}) {

    /** 
     * This function to get the correct image to show up for the streaming service.
     * 
     * You don't need to worry about it - I just wanted this to look pretty.
     * 
     * Input: show.streams_on
     * Output: image src
     * */
    function getStreamingLogo(streamOnString) {
        let imgSrc;
        switch (streamOnString) {
            case "Amazon":
                imgSrc = "./images/amazon.png";
                break;
            case "HBO":
                imgSrc = "./images/hbo.webp";
                break;
            case "Hulu":
                imgSrc = "./images/hulu.png";
                break;
            case "Netflix":
                imgSrc = "./images/netflix.jpeg";
                break;
            case "Peacock":
                imgSrc = "./images/peacock.png";
                break;
        }
        return imgSrc;
    }

    function handleAddOrRemove(e) {
        
        let t = e.target
        
        if (t.innerText !== 'Delete') {

        while (!t.classList.contains('show-card')) {
            t = t.parentNode
        }
        let title = t.children[1].children[0].children[0].innerText

        onShowClicked(title)

        }
    }

    function handleDelete(e) {
        
        let t = e.target
        
        if (t.innerText === 'Delete') {

        while (!t.classList.contains('show-card')) {
            t = t.parentNode
        }
        let title = t.children[1].children[0].children[0].innerText

        onShowDelete(title)

        }
    }

    return(
        <div className="show-card" onClick={(e) => handleAddOrRemove(e)}>
            <img src={show.image} alt="cover art" className="show-art"/>
            <div className="details-container">
                <header>
                    <h3>{show.name}</h3>                    
                </header>
                <p>{show.summary}</p>
                <footer>
                    <img src={getStreamingLogo(show.stream_on)} alt={show.stream_on} className="streaming-logo"></img>
                    <button onClick={(e) => handleDelete(e)}>Delete</button>
                </footer>
            </div>
        </div>
    );
}

export default ShowCard;