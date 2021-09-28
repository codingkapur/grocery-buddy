import Message from './components/Message';
import List from './components/List';

function App() {

  const onSubmit= (e) => {
    e.preventDefault();
  }

  return (
    <div className="app__container">
      <Message />
      <h1 className="title">Grocery Buddy</h1>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" placeholder="Add an item" className="form__input"/>
        <button type="submit" className="form__submit">Submit</button>
      </form>
      <List />
      <button className="clear__btn">Clear All</button>
    </div>
  );
}

export default App;
