import { useEffect, useState } from 'react'
import { API } from '../../lib/api'
import '../Home/Home.css'

const Initiator = () => {
    // const Duelist = useParams()
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const response = await API.get(`/users/Initiator`)
            setUsers(response.data)
        } catch (error) {
            console.error('error get users', error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        // <div className="home">
            <div> 
                <ul className='ul-home'>
                    <li className='li-home'>
                        {users.map((item, index) => {
                            return (
                                <a key={index}>
                                    <img src={item.displayIcon}/>
                                    <span>{item.displayName}</span>
                                </a>
                            )
                        })}
                    </li>
                </ul>
            </div>
        // </div>
    )
}

export default Initiator