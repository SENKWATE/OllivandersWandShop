import React, {Component} from 'react';
import WandCard from "./WandCard"

class WandsList extends Component{
  render()
  {
    let wandCards = this.props.wands.map(wand => ( <WandCard wand = {wand} key = {wand.core}/>
    ));
    return(
      <div>
        <div className="">
          <h3>List of Wands:</h3>
            <div className="row" style={{marginLeft: 150}}>
              {wandCards}
            </div>
        </div>
      </div>
    );
  }
}

export default WandsList;
