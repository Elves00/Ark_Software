//This function needs to be called Account for the navbar to link to it.
import { NavLink } from "react-router-dom";

export default function Account() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Account Page
            <NavLink className="nav-link" to="profilePage">Bex see profile?</NavLink>

          </p>
        
  
        </header>
      </div>
    );
  }