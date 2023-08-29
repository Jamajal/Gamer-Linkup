import './Filters.scss'
import filterIcon from '../../assets/filter-icon.svg'

const Filters = () => {

  const categories = ['All Games', 'Action', 'Adventure', 'Indie', 'Horror', 'MMORPG',
  'MOBA', 'Open World', 'Platformer', 'Racing', 'RPG', 'Shooter', 'Sport', 'Strategy', 'Survival', 'General']

  const listCategories = categories.map((category, index) => ( 
    <li key={index}>
      <input type='checkbox' value={category}/>
      <label>{category}</label>
    </li>
  ))

  return (
    <section className='app__filters'>
      <div className='app__filters-title'>
        <img src={filterIcon}/>
        <h3>FILTERS</h3>
      </div>
      
      <ul  className='app__filters-categories'>
        <li>
          <input type='checkbox' value='Strict Search'/>
          Strict Search
        </li>
        {listCategories}
      </ul>
    </section>
  )
}

export default Filters