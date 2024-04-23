import { useEffect, useState } from 'react'
import { API } from '../../lib/api'
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const response = await API.get('/users')
            setUsers(response.data)
        } catch (error) {
            console.error('error get users', error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="home">
            <span>HOME CATEGORY : 4</span>
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
        </div>
    )
}

export default Home