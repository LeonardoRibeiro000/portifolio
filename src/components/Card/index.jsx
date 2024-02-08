import './style.css'

const Card = (props) => {
    return (
        
            <div className='container-item'>
                <div className='image'>
                <img src={props.image}></img>
                </div>
                <h3>{props.title}</h3>
                <section className='content'>
                <p>{props.text}</p>
                </section>
                
            </div>

        
    )
       
    
}


export default Card