import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SingleItem } from './SingleItem'

const ItemList = ({ title, maxItems,  itemsArray, path, idPath }) => {

  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const finalItem = isHome ? maxItems : Infinity;

  return (
    <div className='item-list'>
      <div className='item-list__header'>
        <h2>{ title }</h2>
        { isHome ? (
          <Link to= {path} className= 'item-list__link'>
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>  
      <div className='item-list__container'>
        {itemsArray
          .filter((currenValue, index) => index < finalItem)
          .map((currentObj, index) => (
          <SingleItem
            idPath = {idPath}
            {...currentObj}
            key={`${title}-${index}`}/>
        ))}
      </div>
    </div>
  )
}

export default ItemList