import { useState } from 'react';
import './CardList.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Card from '../Card/Card';
//import PaginationRounded from '../Pagination/Pagination';

function CardList({items, matchedItems, onItemClick, onSearchMatch, statusFilter, itemToMatch}) {

  const [page, setPage] = useState(1);

  function handlePageChange(e, value) {
    setPage(value);
  }  

  function checkIsMatched(matchedItems, item) {
    if (matchedItems.find((matchedItem) => matchedItem.dealerKey === item.id)) {
      return true;
    } else 
    return false;
  }  

  return (
    <Stack spacing={2}>
      {((statusFilter === 'all') || (statusFilter === '')) && <ul className='cardlist'>
        {items.slice(2*(page-1), 2*page).map((item) => (
          <Card 
            item={item}
            key={item.id}
            isMatched={checkIsMatched(matchedItems, item)}
            matchedItems={matchedItems}
            onItemClick={onItemClick}
            onSearchMatch={onSearchMatch}
            itemToMatch={itemToMatch}
          />
        ))}
      </ul>}
      {(statusFilter === 'yes') && <ul className='cardlist'>
        {items.slice(2*(page-1), 2*page).map((item) => (
          checkIsMatched(matchedItems, item) && <Card 
            item={item}
            key={item.id}
            isMatched={checkIsMatched(matchedItems, item)}
            matchedItems={matchedItems}
            onItemClick={onItemClick}
            onSearchMatch={onSearchMatch}
            itemToMatch={itemToMatch}
          />
        ))}
      </ul>}
      {(statusFilter === 'no') && <ul className='cardlist'>
        {items.slice(2*(page-1), 2*page).map((item) => (
          !checkIsMatched(matchedItems, item) && <Card 
            item={item}
            key={item.id}
            isMatched={checkIsMatched(matchedItems, item)}
            matchedItems={matchedItems}
            onItemClick={onItemClick}
            onSearchMatch={onSearchMatch}
            itemToMatch={itemToMatch}
          />
        ))}
      </ul>}
        <Pagination count={Math.ceil(items.length/2)} shape="rounded" size="small" onChange={handlePageChange} />
    </Stack>
  );
}

export default CardList;
