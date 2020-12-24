import React, {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState('');
  const [login, setLogin] = useState(false);
  const [placeholder, setPlaceholder] = useState('enter name')

  const handleInputChange = (e) => {
      e.target.value ? setUser(e.target.value[0].toUpperCase() + e.target.value.slice(1)) : setUser(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    switch (user){
      case "Melissa": 
        setUser("Mom")
        break;
      case "Jacob": 
        setUser("Girbin Zambeeze la Ploop the Rhinocerus Pinch")
      break;
      case "Jake": 
        setUser("Girbin Zambeeze la Ploop the Rhinocerus Pinch")
      break;
      case "Joey": 
        setUser("Josh")
      break;
      case "Joseph": 
        setUser("Joshua")
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
    setPlaceholder("I said 'enter name'!")
  }

  const checkLogin = () => {
    if(login === false){
      return(
        <form onSubmit={(e) => user !== '' ? handleLogin(e) : handleRejection(e)}>
          <input className="name_input" type="text" placeholder={placeholder} value={user} onChange={(e) => handleInputChange(e)}></input>
          <button className="submit_name_btn" type="submit">Submit</button>
        </form>
      )
    } else {
      return(
        <h1 className="merry_xmas">Merry Christmas {user}!</h1>
      )
    }
  }

  return (
    <div className="App snow">
      {checkLogin()}
    </div>
  );
}

export default App;
