import React, {Component} from "react"
import Modal from 'react-modal'
import * as ReactBootStrap from "react-bootstrap"

class InfoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ModalIsOpen: false,

      }
  }
  render() {
    return (
      <div className="InfoButton">
          <button  type="button" class="btn btn-link"  onClick={() => this.setState( {ModalIsOpen : true}) } >Info</button>
            
        <Modal isOpen={this.state.ModalIsOpen} style={{color: "#FF8C00"}}>
            <hr></hr><br></br><br></br><br></br><br></br>
            <ReactBootStrap.Table  className="table table-dark " striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="text-center text-dark bg-secondary">User ID</th>
                  <th className="text-center text-dark bg-secondary">Name</th>
                  <th className="text-center text-dark bg-secondary">Start Time</th>
                  <th className="text-center text-dark bg-secondary">End Time</th>
                </tr>
              </thead>
                
              <tbody>
              
                <td className="text-center ">{this.props.obj.id}</td>
                <td className="text-center">{this.props.obj.name}</td>
                <td className="text-center"> <ul><li className="text-center">{this.props.obj.time[0].start_time}</li>
                                              <li className="text-center">{this.props.obj.time[1].start_time}</li>
                                              <li className="text-center"> {this.props.obj.time[2].start_time}</li></ul> </td>
                <td className="text-center"> <ul><li className="text-center">{this.props.obj.time[0].end_time}</li>
                                              <li className="text-center">{this.props.obj.time[1].end_time}</li>
                                              <li className="text-center"> {this.props.obj.time[2].end_time}</li></ul> </td>

              </tbody>
            </ReactBootStrap.Table>  
            <br></br>
            <br></br>
                <ReactBootStrap.Button className="btn btn-secondary btn-lg btn-block"onClick={() => this.setState( {ModalIsOpen : false}) }>Close</ReactBootStrap.Button>
            </Modal>

      </div>
    );
  }
}



        
export default InfoButton
