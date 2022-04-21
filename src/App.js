import React, { useState, useEffect, Fragment} from 'react'
import Header from './component/Header'
import ProductListing from './component/ProductList/ProductListing';
import ModalItem from '../src/component/ModalItem/ModalItem'


import './App.css';



function App() {
  const [users, setUsers] = useState([])

  const [modalShown, setModalShown] = useState(false);
  const [userData, setUserData] = useState(null);



  useEffect(() => {
    fetchUsers()
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('https://api.npoint.io/f5cbbe6ec094792b0ea5')
    const data = await response.json()

    const transformedUsers = data.map((user) => {
      return {
        id: user.id,
        pic: user.pic,
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: {
          name: user.company.name,
          catchPhrase: user.company.catchPhrase
        }
      }
    })

    setUsers(transformedUsers)
  }

  const showHandler = (users) => {
    setUserData(users)
    setModalShown(true)
  }
  const hideHandler = () => {
    setModalShown(false)
  }



  return (
    <Fragment>
      {modalShown && <ModalItem onHide={hideHandler} onData ={userData}/>}
      <Header />
      <main>
        <ProductListing
          items={users}
          onShow={showHandler}

        />
      </main>
    </Fragment>



  );
}

export default App;
