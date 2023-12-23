import './sidebar.css'
import logo from '../../assets/fcclogo.png'



import { SidebarData } from './SidebarData'
const Sidebar = () => {
  return (
    <main className='sidebar__main'>
      <div className="sidebar__container">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="sidebar__content">
          {SidebarData.map(item => <div className='sidebar__items'><ul key={item.id}> <div className='icon'>{item.icon}</div><a href={item.link}>{item.title}</a></ul></div>)}
        </div>
        <div className="logo"> <h3>footer</h3></div>
      </div>
    </main>
  )
}

export default Sidebar
