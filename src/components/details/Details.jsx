import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../library/chatStore";
import { auth, db } from "../../library/firebase";
import { useUserStore } from "../../library/userStore";
import "./details.css";

const Details = () => {
  const { currentUser } = useUserStore();
  const {
    user,
    chatId,
    changeBlock,
    isRecieverUserBlocked,
    isCurrentUserBlocked,
  } = useChatStore();

  const handleBlock = async () => {
    if (!user) return;
    const userDocRef = doc(db, "users", currentUser.id);
    try {
      await updateDoc(userDocRef, {
        blocked: isRecieverUserBlocked
          ? arrayRemove(user.id)
          : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="details">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>{user?.username}</h2>
        <p>User description</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You're blocked"
            : isRecieverUserBlocked
            ? "You've blocked this user"
            : "Block user"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Details;
