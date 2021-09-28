import Item from './Item';

function List({onDelete, items}) {
    return (
        <div className="list__container">
           {items.map((item,index) => {
               return <Item  key={index} onDelete={onDelete} item={item}/>
           })}
        </div>
    )
}

export default List;