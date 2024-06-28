import axios from "axios";
import Homee from "./components/Homee"
export default function Home(){

  // just to start the server 
  axios.get(`https://codify-kmyn.onrender.com/question`)
    .then((response) => {})
    .catch((error) => {});
  return (
    <div>
     <Homee/>
    </div>
  )
}