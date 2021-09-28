
function App() {

  const onSubmit= (e) => {
    e.preventDefault();
  }

  return (
    <div className="app__container">
      <h1 className="title">Grocery Buddy</h1>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" placeholder="Add an item" className="form__input"/>
        <button type="submit" className="form__submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
