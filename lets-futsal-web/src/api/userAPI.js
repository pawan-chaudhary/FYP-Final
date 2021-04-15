import {useState, useEffect} from 'react';
import axios from 'axios';

function AdminAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    // const [cart, setCart] = useState([])
    // const [history, setHistory] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('http://localhost:7070/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 'Admin' ? setIsAdmin(true) : setIsAdmin(false)

                    // setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])
    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        // cart: [cart, setCart],
        // addCart: addCart,
        // history: [history, setHistory]
    }
}
export default UserAPI