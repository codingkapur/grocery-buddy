import {useState, useEffect } from 'react';
import Message from './components/Message';
import List from './components/List';
// import Form from './components/Form';

function App() {

  // Set State
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //Form input state

  const [text, setText] = useState('');

  //Fetch Data from DB
  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    return data;
  }
  const updateItems = async () => {
    const data = await fetchItems();
    setItems(data);
    setLoading(false)
  }
  useEffect(()=> {
    updateItems();
  },[])
  //Display Loading While Data is loading
  if(loading){
    return <h2 className="loading__message">LOADING...</h2>
  }

  //Functions
  //ADD AN ITEM
  const onAdd = async(item) => {
    const res = await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: {
        "Content-type":'application/json'
      },
      body: JSON.stringify(item),
    })
    const data = await res.json();
    setItems([...items, data])
  }
  //SUBMIT BUTTON BEHAVIOR
  const onSubmit= (e) => {
    e.preventDefault();

    if(!text){
      alert("Add an item")
      return;
    }

    onAdd({text})

    setText('');
  }


  //DELETE AN ITEM
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`,{
      method: 'DELETE'
    })
    setItems(items.filter(item => item.id !== id))
  }


  return (
    <div className="app__container">
      <Message />
      <h1 className="title">Grocery Buddy</h1>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" placeholder="Add an item" className="form__input" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button type="submit" className="form__submit">Submit</button>
      </form>
      <List onDelete={onDelete} items={items}/>
      <button className="clear__btn" onSubmit={onAdd}>Clear All</button>
    </div>
  );
}

export default App;
