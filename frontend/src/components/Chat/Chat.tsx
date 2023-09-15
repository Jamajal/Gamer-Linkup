import './Chat.scss'
import searchIcon from '../../assets/search-icon.svg'
import buddiesIcon from '../../assets/buddies-icon.png'

const Chat = () => {
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
        <li><div/>LEANDRINHO123</li>
        <li><div/>A DANI CARRY 2023</li>
        <li><div/>TUI ESMAGA</li>
      </ul>
    </section>
  )
}

export default Chat 