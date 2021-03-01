import React from 'react'

const Nav = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <img src="../imagenes/unnamed.png" style={{'width':'50%', }}/>
                            </li>

                            <li class="nav-item active">
                                <a className="nav-link" href="#" onClick = {() =>{
                                     props.mostrar((elemento) => {
                                        return {
                                          ...elemento,
                                          mostrarTodos: !elemento.mostrarTodos,
                                        };
                                      });
                                }}>Mostrar Todos </a>
                            </li>
                            <li class="nav-item active">
                                <a className="nav-link" href="#">Mostrar por Rol</a>
                            </li>
                            <li class="nav-item active">
                                <a className="nav-link" href="#">Mostrar por Posición</a>
                            </li>
                            <li class="nav-item active">
                                <a className="nav-link" href="#">Añadir campeones</a>
                            </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
