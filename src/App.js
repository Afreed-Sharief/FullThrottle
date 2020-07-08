import renderUser from "./user"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from "react-bootstrap"
import React, {Component} from "react"

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        members: [],
      }
      
  }

  componentDidMount() {
    fetch('http://localhost:3000/members')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({
          members: result
        });
      });
  }

  
  render()  {
      const Users = this.state.members.length > 0 ? this.state.members.map(renderUser) : <div></div>;
    return (
          
            <div>
            <ReactBootStrap.Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="text-center text-dark bg-secondary">User ID</th>
                  <th className="text-center text-dark bg-secondary">Name</th>
                  <th className="text-center text-dark bg-secondary">Time Zone</th>
                  <th className="text-center text-dark bg-secondary">Details</th>
                </tr>
              </thead>
              <tbody>
              { Users }
              </tbody>
            </ReactBootStrap.Table>  
            </div>
        )
    }
  }
export default App