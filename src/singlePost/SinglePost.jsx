import './singlePost.css'
import avacado from '../assets/avacado.jpg'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={avacado} alt="" className="singlePostImg" />
            <h1 className='singlePostTitle'>
            Avacado Purse
            <div className="singlePostEditCon">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Leah</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDescription'>Cupcake ipsum dolor sit amet pie lollipop. Croissant jelly apple pie toffee danish muffin sweet danish. Sweet chocolate bar chupa chups wafer jujubes cheesecake.

Jelly beans I love cake powder I love candy ice cream. Caramels pudding brownie shortbread gummies candy. Pastry croissant oat cake soufflé fruitcake toffee oat cake. Tiramisu cotton candy chocolate bar marzipan tart topping.

Topping halvah lollipop shortbread jelly-o I love. Chocolate bar toffee chocolate bar brownie cheesecake chocolate cake caramels. Cake pastry jelly-o ice cream carrot cake I love candy oat cake bonbon.

Sweet lollipop danish wafer gingerbread sesame snaps jelly-o. Icing chocolate bar sweet roll donut pudding cake danish danish sugar plum. I love dragée jelly cake chocolate jelly-o gummi bears.

Toffee pudding cake pudding bear claw croissant. Bear claw jelly beans jelly beans dessert bear claw donut dragée lemon drops I love. Toffee candy canes sesame snaps tart cookie chocolate.</p>
        </div>
    </div>
  )
}
