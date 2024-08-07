import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { food_list } from '../../assets/assets'
import Footer from '../../components/Footer/Footer'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [Category, setCategory] = useState("All");
    console.log(Category);
  return (
    <div>
      <Header />
      <ExploreMenu Category={Category} setCategory={setCategory} />
      <FoodDisplay food_list={food_list} category={Category} />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default Home

