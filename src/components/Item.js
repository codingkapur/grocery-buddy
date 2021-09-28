import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function Item() {
  return (
    <div className="item__container">
      <h3 className="item__title">Eggs</h3>
      <div className="item__operation__container">
        <AiFillEdit className="operation__btn operation__btn--edit"/>
        <AiFillDelete className="operation__btn operation__btn--delete"/>
      </div>
    </div>
  );
}
export default Item;
