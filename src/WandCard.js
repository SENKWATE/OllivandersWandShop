import React, {Component} from 'react'
import wands from "./wands";

class WandCard extends Component{
  render(){
    return(
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card S">
        <div className="image pik">
          <img
            className="card-img-top img-fluid"
            src={this.props.wand.imageUrl}
            alt={this.props.wand.core}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title title">
            <span>
              {this.props.wand.core}
            </span>
          </h5>
          <small className="card-text detail">
            <p><strong>Wood:</strong> {this.props.wand.wood}</p>
            <p><strong>Length:</strong> {this.props.wand.length}</p>
          </small>
        </div>
      </div>
      <p>\n</p>
    </div>


    // <div className="card" style={{width: 400}}>
    //   <img class="card-img-top" src={this.props.wand.imageUrl} alt={this.props.wand.core}/>
    //   <div class="card-body">
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>




  );
  }
}

export default WandCard;
