import React from 'react'
import { Navbar } from '../navbar/Navbar'
import '../home/Home.css'
export const Home = () => {
  return (
    <main>
      <header>
        <Navbar/>
      </header>
      <section className="home section">
        <h1>Home</h1>
      </section>
    </main>
  )
}
