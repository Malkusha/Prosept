import { useEffect, useState } from 'react';
import './Main.css';

import Filter from '../Filter/Filter';
import CardList from '../CardList/CardList';

function Main({items, matchedItems, onItemClick, onSearchMatch, itemToMatch}) {

 const [statusFilter, setStatusFilter] = useState('all');

  function onFilterChange(e) {
    return setStatusFilter(e.target.value);
  }

  return (
    <section className='main'>
      <Filter 
        onFilterChange={onFilterChange}
      />
      <CardList 
        items={items}
        matchedItems={matchedItems}
        onItemClick={onItemClick}
        onSearchMatch={onSearchMatch}
        statusFilter={statusFilter}
        onFilterChange={onFilterChange}
        itemToMatch={itemToMatch}
      />
    </section>
  );
}

export default Main;