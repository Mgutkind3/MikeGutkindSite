import Carousel from '../components/Carousel';
import waveGif from '../assets/waves.gif';


export const Home = () => {
  return (
    <div className="home" id="home">
      {
     /*{ <Carousel />}*/
     }
      <img src={waveGif} alt="my-gif" />
    </div>
  );
}

export default Home;

//color scheme: https://coolors.co/cad2c5-84a98c-52796f-354f52-2f3e46
