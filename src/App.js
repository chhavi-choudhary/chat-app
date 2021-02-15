import Contact from './components/Contact'
import './App.css';


function App() {
  return (
    <div className="chat-app">
     <Contact name="Wilders Lego 1" image="https://randomuser.me/api/portraits/lego/8.jpg" isOnline/>
     <Contact  name="Wilders Lego2" image="https://randomuser.me/api/portraits/lego/2.jpg" />
     <Contact  name="Wilders Lego3" image="https://randomuser.me/api/portraits/lego/0.jpg"isOnline/>
    </div>
  );
}

export default App;
