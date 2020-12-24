import React, {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState('');
  const [login, setLogin] = useState(false);

  const handleInputChange = (e) => {
      e.target.value ? setUser(e.target.value[0].toUpperCase() + e.target.value.slice(1)) : setUser(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    switch (user){
      case "Melissa": 
        setUser("Mom")
        break;
      case "Ciara":
        setUser("now Brabe")
        break;
      default:
        setUser(user);
    };

    setLogin(true)
  }

  const handleRejection = (e) => {
    e.preventDefault()
    alert("Surely you have a name...")
  }

  const checkLogin = () => {
    if(login === false){
      return(
        <form onSubmit={(e) => user !== '' ? handleLogin(e) : handleRejection(e)}>
          <input className="name_input" type="text" placeholder="enter name" value={user} onChange={(e) => handleInputChange(e)}></input>
          <button className="submit_name_btn" type="submit">Submit</button>
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
