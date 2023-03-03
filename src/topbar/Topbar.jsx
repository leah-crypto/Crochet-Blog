import './topbar.css'
import meee from '../assets/meee.jpg';

export default function Topbar(){
    return(
        <div className='top'>
            <div className='topLeft'>
            <i className='topIcon fa-brands fa-facebook'></i>
            <i className='topIcon fa-brands fa-instagram'></i>
            <i className='topIcon fa-brands fa-pinterest'></i>
            <i className='topIcon fa-brands fa-etsy'></i>
            <i className='topIcon fa-solid fa-r'></i>
            <i className='topIcon fa-brands fa-tiktok'></i></div>
           
            <div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'>
                        Home
                    </li>
                    <li className='topListItem'>
                        About
                    </li>
                    <li className='topListItem'>
                        Contact
                    </li>
                    <li className='topListItem'>
                        Write
                    </li>
                    <li className='topListItem'>
                        Logout
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImage' src={meee} alt=''></img>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}