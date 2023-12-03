import './Filter.css';

function Filter() {
  return (
    <label className='filter'>
      <h1 className='card__title'>Наименование</h1>
      <select>
        <option>Соответствие</option>
        <option>Все</option>
        <option>Установлено</option>
        <option>Не установлено</option>
      </select>
      <p className='card__date'>Дата выгрузки</p>
      <p className='card__price'>Цена</p>
      <p className='card__prod-name'>Наименование просепт</p>
    </label>
  )
}

export default Filter;