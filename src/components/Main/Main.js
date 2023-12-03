import './Main.css';

import Filter from '../Filter/Filter';
import CardList from '../CardList/CardList';

function Main({items, matchedItems, onItemClick, onSearchMatch}) {

  

  return (
    <section className='main'>
      <Filter 
      
      />
      <CardList 
        items={items}
        matchedItems={matchedItems}
        onItemClick={onItemClick}
        onSearchMatch={onSearchMatch}
      />
    </section>
  );
}

export default Main;