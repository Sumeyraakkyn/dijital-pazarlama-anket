import {useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import PageContainer from './container/PageContainer'


function App() {
  return (
    <div>
      <PageContainer>
        <Header />
      </PageContainer>
    </div>
  )
}

export default App

