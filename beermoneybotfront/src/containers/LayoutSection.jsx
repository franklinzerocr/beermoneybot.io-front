import React from 'react';
import '../styles/Layout.scss'

const LayoutSection = ({children}) =>  {
    return(
<div className="layout-section">
    {children}
</div>
    );
}

export default LayoutSection;