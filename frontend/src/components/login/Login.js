import { Link } from "react-router-dom";
import Button from "../Button";
import Register from "./Register";
import '../../styles/Login.css';

function Login() {
    return (
        <section class="section__form-data">
            <h2>Iniciar sesión</h2>
            <form>
                <label htmlFor="">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" id="" />
                </label>
                <label htmlFor="" className='label__password-input'>
                    <span>Contraseña</span>
                    <input type="password" name="password" id="" />
                </label>
                <Button text="Ingresar" type="submit" className="btn button__solid-type" />
            </form>
            <p>¿Aún no tenes cuenta? <Link to="/register" element={<Register />}>Registrate</Link></p>
        </section>
    )
  }
  
export default Login;