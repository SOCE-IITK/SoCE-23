import "./Styles/home.css";
import Hero from "./Home/Hero";
import Message from "./Home/Message";
import Slider from "./Home/Slider";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <Message />
      <Slider />
    </div>
  );
}