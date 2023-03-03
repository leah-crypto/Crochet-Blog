import './sidebar.css'
import me2 from '../assets/me2.jpg'

export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sideBarTitle">ABOUT ME</span>
          <img className="me2" src={me2} alt="" />
            <p>Cupcake ipsum dolor sit amet pie lollipop. Croissant jelly apple pie toffee danish muffin sweet danish. Sweet chocolate bar chupa chups wafer jujubes cheesecake.

Jelly beans I love cake powder I love candy ice cream. Caramels pudding brownie shortbread gummies candy. Pastry croissant oat cake soufflé fruitcake toffee oat cake. Tiramisu cotton candy chocolate bar marzipan tart topping.</p>
        </div>
        <div className="sidebarItem">
            <span className="sideBarTitle">CATAGORIES</span>
            <ul className='sidebarList'>
                <li className="sidebarListItem">Crochet</li>
                <li className="sidebarListItem">Knitting</li>
                <li className="sidebarListItem">Loom Knitting</li>
                <li className="sidebarListItem">Tunisian Crochet</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sideBarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className='sidebarIcon fa-brands fa-facebook'></i>
            <i className='sidebarIcon fa-brands fa-instagram'></i>
            <i className='sidebarIcon fa-brands fa-pinterest'></i>
            <i className='sidebarIcon fa-brands fa-etsy'></i>
            <i className='sidebarIcon fa-solid fa-r'></i>
            <i className='sidebarIcon fa-brands fa-tiktok'></i> 
            </div>
            </div>
    </div>
  )
}
