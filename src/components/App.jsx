import { Component } from "react";
import './styles.css'

class App extends Component {
  state = {  } 
  render() { 
    return (
    <div class="photo-card">
    <img src="{webformatURL}" alt="{tags}" loading="lazy"/>    
    </div>);
  }
}
 
export default App;