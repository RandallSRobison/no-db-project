import React, {Component} from 'react'
import AllParts from './AllParts'

class Header extends Component {
    constructor(){
        super()

        this.state = {
            view: AllParts
        }
        this.handleView = this.handleView.bind(this)
    }

handleView(){
if(this.state.view === AllParts){
    this.setState({view: AllParts})
} else if(this.state.view === FavoriteParts){
    this.setState({view: FavoriteParts})
} else if(this.state.vew === AddPart){
    this.setState({view: AddPart})
}
}

render(){
    return(
        <div>
            <button>all parts</button>
            <button>favorite parts</button>
            <button>add part</button>
        </div>
    )
}
}

export default Header