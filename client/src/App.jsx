/* eslint-disable no-unused-vars */
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { useAuth } from './context/Authprovider'
import Left from './home/LeftPart/Left'
import Right from './home/RightPart/Right'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      {/* <div className='flex'>
        <Left/>
        <Right/>
      </div> */}
      {/* <Signup/> */}
      <Login/>
    </>
  )
}

export default App
