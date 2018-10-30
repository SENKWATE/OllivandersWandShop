import React, {Component} from 'react';
import WandCard from "./WandCard"

class WandsList extends Component{
  render()
  {
    let wandCards = this.props.wands.map(wand => ( <WandCard wand = {wand} key = {wand.core}/>
    ));
    return(
      <div>
        <div className="this.props.wands">
          <h3 className = "head">List of Wands:</h3>
            <div className="row bk" style={{marginLeft: 150}}>
              {wandCards}
            </div>
        </div>
      </div>
    );
  }
}

export default WandsList;
