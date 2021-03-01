import React from 'react'
import { fetch, useFetch } from "../hooks/useFetch ";

export const Cards = () => {
    const consulta = useFetch(
      "http://localhost:3000/api/select"
    );

    const { datos, carga } = consulta;

    const mostrarDatos = () => {
        return datos.data.map((campeones, index) => {
            
            return (
                <div
                style={{marginLeft: "2%", marginRight: "2%"}}
                className="col animate__animated animate__zoomInUp"
                key={index}
                >

                <div className="card" style={{ width: "18rem"}}>
                    <img src={campeones.img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h5 className="card-title">{campeones.nombre}</h5>
                    <p className="card-text">
                        Rol: {campeones.rol} 
                        <img src={`../imagenes/${campeones.rol}.png`}/>
                    </p>
                    <p className="card-text">
                        Posicion: {campeones.posicion}
                    </p>
                    </div>
                </div>
                </div>
            );
            });
        };
        return (
            <>
        
              <div className="row" >
                {carga ? (
                  mostrarDatos()
                ) : (
                  <div class="alert alert-primary animate__animated" role="alert" style={{'margin-left':'43%', 'marginTop':'1%'}} >
                    Cargando datos
                  </div>  
                )}
              </div>
            </>
          );
        };

