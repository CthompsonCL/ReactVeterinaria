import React, { Component } from 'react';

class NuevaCita extends Component {
    state = {
        cita: {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        },
        error: false
    }

    //cuando el usuario envia el formulario
    handleSubmit = e => {
        e.preventDefault();
        //extraer los valores del state
        const {mascota,propietario,fecha,hora,sintomas} = this.state.cita;
        if( mascota == '' || propietario == '' || fecha == '' || hora == '' || sintomas == ''){
            this.setState({
                error : true
            });

            //detener la ejecución
            return; 
        }

        //validar que todos los campos esten llenos

        //agregar la cita al state de App.
    }

    //cuando el usuario escribe en los input
    handleChange = e => {
        // console.log(e.target.name + ': ' + e.target.value);
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                            <div ></div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Propietario
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del dueño"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                            <div>




                            </div>
                        </div>

{/*form-group row*/}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                          
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Hora"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
{/*form-group row*/}

<div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                               <textarea className="form-control" name="sintomas"
                                placeholder="Describe los sintomas"
                                onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                >

                               </textarea>
                            </div>
                            <div>




                            </div>
                        </div>
                        <input type="submit" className="py-3 mt-2 btn btn-block btn-success" value="Agregar Nueva Cita"/>
                    </form>

                </div>
            </div>
        );
    }
}

export default NuevaCita;