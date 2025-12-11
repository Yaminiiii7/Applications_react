const Event=(props)=>{
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(props.location)}`;
    
    return(
    <div className="EventtempleBlock">
        <img src={props.img} alt='Temple image' height='200px' width='200px'/>
        <h3>{props.templeName}</h3>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="locationLink">
            <h6>{props.location}</h6>
        </a>
    </div>
)}

export default Event;