import './style.css'

const Card = (props) => {
    return (
        
            <div className='container-item'>
                <div className='image'>
                <img src={props.image}></img>
                </div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>

        
    )
       
    
}


export default Card