import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import Login from "./components/login/Login";


const user = false;

const App = () => {
  return (
    <div className='container'>
      {user ? ( <>
      <List/>
      <Chat/>
      <Details/>
      </>): (
        <Login />
      )}
   
    </div>
  )
}

export default App