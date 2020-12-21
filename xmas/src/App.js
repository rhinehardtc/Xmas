import React, {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState('');
  const [login, setLogin] = useState(false)

  const handleInputChange = (e) => {
    setUser(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(true)
  }

  const checkLogin = () => {
    if(login === false){
      return(
        <form onSubmit={(e) => user !== '' ? handleLogin(e) : alert("Surely you have a name...")}>
          <input className="name_input" type="text" placeholder="enter name" value={user} onChange={(e) => handleInputChange(e)}></input>
          <button type="submit">Submit</button>
        </form>
      )
    } else {
      return(
        <h1>Merry Christmas {user}!</h1>
      )
    }
  }

  return (
    <div className="App">
      {checkLogin()}
    </div>
  );
}

export default App;
