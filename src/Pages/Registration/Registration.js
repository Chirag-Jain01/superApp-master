import React from 'react';
import LeftSection from '../../Component/LeftSection/LeftSec';
import RegisterForm from '../../Component/Register/RegisterForm';
import styles from './Registration.module.css'

function Registration() {
  return (
    <div className={styles.container}>
        <LeftSection />
        <RegisterForm />
    </div>
  )
}

export default Registration