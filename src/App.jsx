import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import Themes from "./components/themes/Themes";
import { useUserStore } from "./lib/userStore";



const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(AuthenticatorAssertionResponse, (user) => {
      fetchUserInfo(user.uid)
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  
  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className="container">n
      {currentUser ? (
        <>
          <Themes />
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
