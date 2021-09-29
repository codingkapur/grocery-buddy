import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function Item({onDelete, item, onEdit }) {
  return (
    <div className="item__container">
      <h3 className="item__title">{item.text}</h3>
      <div className="item__operation__container">
        <AiFillEdit className="operation__btn operation__btn--edit" onClick={()=> onEdit(item.id)}/>
        <AiFillDelete className="operation__btn operation__btn--delete" onClick={()=> onDelete(item.id)}/>
      </div>
    </div>
  );
}
export default Item;
