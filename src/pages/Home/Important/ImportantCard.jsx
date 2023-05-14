

export const ImportantCard=({img,title,text})=>{
    

    return(
     <div className="importantCard" >
           <img src={img} className="importantCard__img" alt={title}/>
           <h3 className="importantCard__title">{title}</h3>
           <p className="importantCard__text">{text}</p>
     </div>
    )
}