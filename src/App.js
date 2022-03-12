import './App.css';
import Address from './components/Profile/Address';
import Fullname from './components/Profile/FullName';
import Profilephoto from './components/Profile/ProfilePhoto';

import './style.css'
function App() {
  return (
    <>
    <header></header>
    <main>
      <section className='content-profil'>
        <div className='container'>
          <div className='content'>
            <Profilephoto/>
            <Fullname/>
            <Address/>
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
