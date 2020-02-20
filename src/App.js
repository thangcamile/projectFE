import React from 'react';
import './App.css';
import TopMenu from './components/Menu/TopMenu'
import Intro from './components/Intro/Intro'
import Image from './components/Image/Image'
import Footer from './components/Footer/Footer'





function App() {
  return (
    <div className="App">
      
      <TopMenu />
      <Intro title="Chỗ này được sử dụng bằng props" image="https://c.pxhere.com/photos/f2/f4/building_modern_sky_architecture_urban_city_usa_tower-1231251.jpg!d" image1="https://c.pxhere.com/photos/b5/73/architecture_modern_building_home_skyscraper_facade_window_housewife-799459.jpg!s" image2="https://c.pxhere.com/photos/51/9a/architecture_blue_building_business_city_construction_corporate_estate-1159088.jpg!s" image3="https://c.pxhere.com/photos/44/f8/building_skyscraper_tower_apartment_building_architecture_modern_contemporary_urban-717601.jpg!s" text="đoạn Text này đã được thay đổi bằng Props"/>
      <Image />
      <Footer />

    </div>
  );
}

export default App;
