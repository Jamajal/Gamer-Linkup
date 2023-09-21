import './Chat.scss'
import searchIcon from '../../assets/search-icon.svg'
import buddiesIcon from '../../assets/buddies-icon.png'

const Chat = () => {

  const userStatus = 'busy'

  return (
    <section className='chat'>
      <div className='chat-title'>
        <img src={buddiesIcon}/>
        <h3>BUDDIES</h3>
      </div>
      <div className='chat__search'>
        <input type='search' placeholder='Insert buddy name'>
        </input>
        <button><img src={searchIcon}/></button>
      </div>
      <ul>
        <li><div className='status--${userStatus}' /> LEANDRINHO123</li>
        <li><div className='status--${userStatus}' /> A DANI CARRY 2023</li>
        <li><div className='status--${userStatus}' /> TUI ESMAGA</li>
      </ul>
    </section>
  )
}

export default Chat 