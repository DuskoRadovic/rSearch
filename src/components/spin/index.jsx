import React from 'react';
import { SpinnerCircular } from 'spinners-react';

const Spin = () => {
    return (
        <SpinnerCircular size={100} 
                             thickness={180}
                             speed={100}
                             color="#48AAAA"
                             secondaryColor="transparent"
                             style={{marginTop: '150px'}}/>
    )
}

export default Spin