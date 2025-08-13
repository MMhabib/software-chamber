
import Footer from './components/Footer';
import Companytech from './pages/compnaytechs/Companytech';
import Development from './pages/development process/Development';
import Faq from './pages/FAQ/Faq';
import Home from './pages/Home/Home/Home';
import LetsTalk from './pages/let\'s talk/LetsTalk';
import Service from './pages/services/Service';
import Testimonial from './pages/testimonial/Testimonial';
import Whychoose from './pages/whychoose/Whychoose';


const App = () => {
  return (
    <div  className='overflow-hidden'>
      <Home/>
      <Service/>
      <Development/>
      <Whychoose/>
      
      <Companytech/>
      <Faq/>
      <Testimonial/>
      <LetsTalk/>
      <Footer/>

    </div>
  );
};

export default App;
