import { useEffect, useState } from "react";

function App() {
    
    const getFactsApi = async() => {
        await fetch('https://catfact.ninja/fact').then((res) => res.json()).then((data) =>( 
            setFacts(data.fact),
            getGiphyApi(data.fact?.split(" ",3).join(' '))
        ))
    } 
    
    const getGiphyApi = async(phrase) => {
        await fetch(`https://api.giphy.com/v1/gifs/search?api_key=OjmWyQ83ebCgPKBS36I3df4LFc9z8Wqr&q=${phrase}`).then((resp) => resp.json()).then((data) => setGiphy(data.data[0].images.original.url));
    }

    useEffect(() => {
        getFactsApi()
    },[]);
    
    const [facts, setFacts] = useState();
    const [giphy, setGiphy] = useState();

    return(
        <div style={{ display: "flex" , gap: '20px', alignItems: "center" }}>
            <h1>{facts}</h1>
            <img src={giphy} style={{ width: "200px", height: "200px", objectFit: "contain" }}></img>
            
        </div>
    )
}


export default App;