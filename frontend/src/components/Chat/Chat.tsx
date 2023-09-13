import './Chat.scss'

const Chat = () => {
  return (
    <section className='chat'>
      <h2>YOUR BUDDIES</h2>
      <div className='chat__search'>
        <input type='search' placeholder='Insert buddy name'>
        </input>
        <button>search</button>
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