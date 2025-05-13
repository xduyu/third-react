import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import HeaderMain from './copmonents/header-main-page'
// import Main from './copmonents/main-page'
// import FooterMain from './copmonents/footer-main-page'
// import InfoFunctionMain from './copmonents/infoFunction-main'
// import InfoClass from './copmonents/infoClass'
// import Hello from './copmonents/Hello'
// import Message from './copmonents/Message'
import Card from './copmonents/card'
import Fourcard from './copmonents/fourcard'

import './App.css'

function App() {
  // const product = {
  //   name: 'Product 1',
  //   price: 100
  // }
  const products = [
    {
      name: 'Laptop',
      price: 1000
    },
    {
      name: 'Phone',
      price: 500
    },
    {
      name: 'Tablet',
      price: 300
    }
  ]

  const user = {
    username: 'ivanov ivan ivanovich',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLu6PEwdLFIHQuTjKAcvmdf9XgppVyPOKO1g&s'
  }

  const competionCards = [
    {
      n: "js",
      n2: "js is good"
    },
    {
      n: "css",
      n2: "css is good"
    },
    {
      n: "html",
      n2: "html is good"
    },
    {
      n: "react",
      n2: "react is good"
    }
  ]

  return (
    <div>
      <div className="container">
        {/* <HeaderMain />
        <Main />
        <InfoFunctionMain firstname='ivan' surName="ivanoich" type="func" />
        <FooterMain />
        <InfoClass name='ivan' surName="ivanoich" /> */}
        <Card username={user.username} avatar={user.avatar}></Card>
        {/* <Hello products={products}></Hello> */}
        {/* <Message message="Incorrect Password" type="error" />
        <Message message="Data sent with some problems" type="warn" />
        <Message message="Data sent" type="info" /> */}
        {
          competionCards.map((el, index) => {
            return <Fourcard key="index" el={el}></Fourcard>
          })
        }
      </div>
    </div>
  )
}

export default App
