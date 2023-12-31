import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [selectedChat,setSelectedChat] = useState();
    const [chats , setChats] = useState();
    let navigate = useNavigate();

    // useEffect(()=>{
    //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //     setUser(userInfo);

    //     if(!userInfo)
    //     {
    //         navigate("/");
    //     }
    // },[navigate])

    useEffect(() => {
        const fetchUserData = async () => {
          const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
          setUser(userInfo);
          if (!userInfo) {
            navigate("/");
          }
        };
        fetchUserData();
      }, [navigate])

    return <ChatContext.Provider value={{ user, setUser , selectedChat ,setSelectedChat , chats , setChats}}>
        {children}
    </ChatContext.Provider>
}

export const ChatState = () => {
    return useContext(ChatContext);
}


export default ChatProvider;