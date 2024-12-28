import { useEffect, useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/addUser";
import {useUserStore} from "../../../lib/userStore";



const Chatlist = () => {
    const [chats, setChats] = useState([]);
    const [addMode, setAddMode] = useState(false);

    const {currentUser} = useUserStore()

    useEffect(() =>{
        const unSub = onSnapshot(doc(db, "userchats", "currentUser.id"), 
        async(res) => {
            const items = res.data().chats;

            const promises = items.map(async(item) => {
                const userDocRef = doc(db, "users", "item.recieverId");
                const userDocSnap = await getDoc(docRef);

                const user = userDocSnap.data()

                return{...item, user};
            });

            const chatData = await Promise.all(promises)

            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt))
        }
    );

        return () =>{
            unSub()
        };
    }, [currentUser.id]);
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png"/>
                    <input type="text" placeholder="Search" />
                </div>
                <img src={ addMode? "./minus.png":"./plus.png"} className="add" 
                onClick={()=>setAddMode((prev)=>!prev)}/>
            </div>
            {chats.map((chat) =>(
            <div className="item" key={chat.chatId}>
                <img src="./avatar.png"/> 
                <div className="texts">
                    <span>
                        sender one
                    </span>
                    <p>{chat.lastMessage}</p>     
                </div>
            </div>
        ))} 
            {addMode &&<AddUser/>} 
        </div>
    )
}

export default Chatlist 