import './header.css'
import Overlay from './Overlay'

export default function Header() {
  return (
    <div className="header">
        <div className='headerTitles'>
            <span className='headerTitleSm'>
                X's and O's
            </span>
            <span className='headerTitleLg'>
                Fiber Arts
            </span>
        </div>
        <Overlay/>
        {/* <img className= "headerImg" src={skeins}></img> */}
        
    </div>
  )
}
