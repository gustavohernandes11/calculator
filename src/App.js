import Footer from './components/Footer'
import ContentDiv from './components/ContentDiv'
import SideBar from './components/SideBar'
import './App.css';







function App() {
  return (
    <div className='app'>
      <SideBar />
      <div className='contentcontainer'>
        <div id="top" className='topline'/>
        <ContentDiv />
        <Footer />
      </div>
    </div>
  );
}

export default App;
