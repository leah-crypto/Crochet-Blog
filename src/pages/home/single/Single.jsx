import './single.css'
import Post from '../../../post/Post'
import Sidebar from '../../../sidebar/Sidebar'
import SinglePost from '../../../singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar />
    </div>
  )
}
