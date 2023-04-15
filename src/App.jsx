import Tour from "./Tour"
import Loading from "./Loading"
import { useEffect, useState } from "react"
import axios from "axios"
import './App.css';

function App() {
 
  const [tours , setTours] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    const tourAxios = async ()=>{
      try{
        const response = await axios.get('https://course-api.com/react-tours-project');
        setTours(response.data);
        setLoading(false);
    }
    catch(err){
      console.log(err)
    }}
    tourAxios();
   },[])

   const deleteTourById = (id) => {
    const afterDeletingTour = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(afterDeletingTour);
  };

  return (
    <div className="App">
      <h1>Our Tours</h1>
      {
        loading === true ? <Loading/> 
        :
        
          tours.length > 0 ?
          tours.map((tour) =>{
            return <Tour key={tour.id} tour = {tour} deleteTourById={deleteTourById} />
          }) 
          :
          <p>Not Tours!</p>
        
       
      }
    
    </div>
  )
}

export default App
