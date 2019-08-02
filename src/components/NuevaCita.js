import React, { Component } from 'react';

class NuevaCita extends Component {
    state = {

    }
    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    <form>
                        <div className="form-group row">
                            <label for="" className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                />
                            </div>
                            <div ></div>
                        </div>

                        <div className="form-group row">
                            <label for="" className="col-sm-4 col-lg-2 col-form-label">Propietario
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del dueño"
                                    name="propietario"
                                />
                            </div>
                            <div>




                            </div>
                        </div>

{/*form-group row*/}
                        <div className="form-group row">
                            <label for="" className="col-sm-4 col-lg-2 col-form-label">Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                />
                            </div>
                          
                            <label for="" className="col-sm-4 col-lg-2 col-form-label">Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Nombre del dueño"
                                    name="propietario"
                                />
                            </div>
                        </div>
{/*form-group row*/}

<div className="form-group row">
                            <label for="" className="col-sm-4 col-lg-2 col-form-label">Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                               <textarea className="form-control" name="sintomas" placeholder="Describe los sintomas" rows="" cols="">

                               </textarea>
                            </div>
                            <div>




                            </div>
                        </div>
                        <input type="sumbit" className="py-3 mt-2 btn btn-block btn-success" value="Agregar Nueva Cita"></input>
                    </form>

                </div>
            </div>
        );
    }
}

export default NuevaCita;