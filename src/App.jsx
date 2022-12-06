import './App.css';
import { Container } from "@mui/material"
import Searcher from './components/searcher';
import { useEffect, useState } from 'react';
import UserCard from './containers/userCard';

import { getGitHubUser } from './services/users' 

function App() {

  const [inputUser, setInputUser] = useState('octocat')
  const [userState, setUserState] = useState('inputUser')
  const [notFound, setNotFound] = useState(false)

  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user)
    
    if(userState === 'octocat'){
      localStorage.setItem('octocat', userResponse)
    }

    if(userResponse.message === 'Not Found') {
      const { octocat } = localStorage
      setInputUser(octocat)
      setNotFound(true)
    }
    else {
      setUserState(userResponse)
    }
  }

  useEffect(() => {
    gettingUser(inputUser)
  },
  [inputUser])

  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      }}>
        <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
      <UserCard userState={userState}></UserCard>
    </Container>
  );
}

export default App;
