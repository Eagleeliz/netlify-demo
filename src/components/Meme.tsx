
import "./meme.scss"
export const Meme = ({title,imageUrl}: {title:string,imageUrl:string})=>{
    return (
        <div className="meme">
            <img src= {imageUrl} alt ={title} className="meme-image"/>
            <h3 className="title">{title}</h3>
        </div>
    )
}