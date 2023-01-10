import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Home } from "./Home";
import { Button } from "./common/button";
import { Form_ } from "./common/form";
import { Navigate, BrowserRouter, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import user from './data/usuarios.json';

export const Formulario = () => {
  const [enviado, setEnviado] = useState(false);
  const [usuario, setUsuario] = useState({nombre: "",
  password: "",});
  let history = useNavigate()

  return (
        <Formik
          initialValues={{
            nombre: "",
            password: "",
          }}
          validate={(valores) => {
            let errores: any = {};
            if (!valores.nombre) {
              errores.nombre = "Por favor ingresa un nombre.";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre =
                "El nombre solo puede contener letras y espacios";
            }
            if (!valores.password) {
              errores.password = "Por favor ingresa un password.";
            } else if (
              !/^[a-zA-Z$@$!%*?&][A-Za-z\d$@$!%*?&]{8,15}/.test(
                valores.password
              )
            ) {
              errores.password =
                "El password debe de tener entre 8 y 15 caracteres";
            }
            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            console.log(valores);
            console.log(user)
            setEnviado(true);
            setUsuario(valores);
            console.log(enviado)
            const found = user.find(element => element === valores  )
            console.log(found)
            history("/home")
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <Form_ onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nombre">Nombre de usuario</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Introduce tu nombre de usuario"
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.nombre && errors.nombre && (
                  <div className="error">{errors.nombre} </div>
                )}
              </div>
              <div>
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Introduce tu contraseña"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.nombre && errors.password && (
                  <div className="error">{errors.password} </div>
                )}
              </div>
              <Button type="submit">Login</Button>
              
              {enviado && <p className="exito">{usuario.nombre} te has logueado con éxito</p>} 
             {/* { user.includes(usuario) ? history("/home") : <Formulario/> } */}
           
            </Form_>
          )}
        </Formik>
  );
};
