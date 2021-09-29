import Item from './Item';

function List({onDelete, items, onEdit}) {
    return (
        <div className="list__container">
           {items.map((item,index) => {
               return <Item  key={index} onDelete={onDelete} item={item} onEdit={onEdit}/>
           })}
        </div>
    )
}

export default List;