import './nav.css'
import React from 'react'
import NavItens from '../navItens'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItens link="/" icon="home" title="Início"/>
            <NavItens link="users" icon="users" title="Usuários"/>
        </nav>
    </aside>