import React, {
    Component
} from 'react';

import negro from './img/Negro.jpg';

class Imagen extends Component {
    render(){
        return(
            <img src={negro} alt="el novio de dennis"/>
        );
    }
}

export default Imagen;