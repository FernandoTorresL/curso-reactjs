import React from "react";

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/df4dcd1833595186c053f0cf369a6c79?s=80" alt="Avatar"/>
                    <h1>Fernando <br/> Torres</h1>
                </div>

                <div className="Badge__section-info">
                    <p>Data Scientist</p>
                    <p>@fertorresmx</p>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;
