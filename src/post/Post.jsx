import './posts.css'
import avacado from '../assets/avacado.jpg'

export default function Post() {
  return (
    <div className='post'>
    <img className='postImg' src={avacado} ></img>
    <div className='postInfo'>
        <div className='postCats'>
            <span className='postCat'>Crochet</span>
            {/* <span className='postCat'>Life</span> */}
        </div>
        <span className='postTitle'>
            Avacado Purse
        </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
    </div>
    <p className='postDescription'>
    Cupcake ipsum dolor sit amet pie lollipop. Croissant jelly apple pie toffee danish muffin sweet danish. Sweet chocolate bar chupa chups wafer jujubes cheesecake.

Jelly beans I 
    </p>
    </div>
  )
}
