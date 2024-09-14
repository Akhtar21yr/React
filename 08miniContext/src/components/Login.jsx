import React , {useState,useContext} from 'react'
import userContext from '../context/UserContext'
function Login() {
    const [Username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({Username,password})
        
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" name="" id="" placeholder='Username' 
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" name="" id="" placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Sumbit</button>
        </div>
    )
}

export default Login