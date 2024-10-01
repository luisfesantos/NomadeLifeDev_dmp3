import React from 'react'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async (e) => {
        e.preventDefault()
        setError('')
        const user = {
            username,
            email,
            password,
            confirmpassword
        }

        const res = await createUser(user)

        console.table(res)
        navigate("/login")
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Registre-se no NomadeLife</h1>
            <form onSubmit={handlerSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type='text'
                        name='username'
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Informe seu Nome'
                    ></input>
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type='email'
                        name='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Digite seu E-mail'
                    ></input>
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type='password'
                        name='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Digite uma Senha'
                    ></input>
                </label>
                <label>
                    <span>Confirmação:</span>
                    <input
                        type='password'
                        name='confirm-password'
                        required
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Digite uma Senha novamente'
                    ></input>
                </label>
                {!loading && <button className='btn'>Cadastrar-se</button>}
                {loading && <button className='btn' disabled>Cadastrando...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register