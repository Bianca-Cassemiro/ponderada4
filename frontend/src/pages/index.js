import React from 'react';
import styles from '../styles/loginPage.module.css';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'; 
const notify = () => toast.success('Autenticação realizada com sucesso!');

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
      <h1 className={styles.title}>Login</h1>
        <input className={styles.login} type="text" placeholder="Email" />
        <input className={styles.login} type="password" placeholder="Senha" />
        <Toaster />
        <Link href="/dashboard" className={styles.Link}>
        <button className={styles.button} onClick={notify} type="submit">Entrar</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;

