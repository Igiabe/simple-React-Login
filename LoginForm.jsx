import React from 'react'
import Joi from 'joi-browser';
//import Joi from 'joi'
import { useState } from 'react'
import { validate } from '@babel/types';

const LoginForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})



    // const schema = {
    //     email: Joi.string().email(),
    //      password: Joi.string().required().min(6)
    //  }

    //const validateProperty = (email, value, schema) => {
    //     const obj = {
    //          [email]: value
    //       };
    //       const fieldSchema = {
    //           [email]: schema[email]
    //       };

    //      const result = Joi.validate(obj, fieldSchema)
    //console.log(result)

    //}
    //  const handleEmailChange = (email,) => {
    //      setEmil(e.target.value)
    //     console.log('email submited')
    //  }

    // }

    const validate = e => {
        const upDateForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(upDateForm);
    }
    const handleSubmit = e => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3"><label htmlFor="EmailAdress">
                </label>Email Address<input
                        value={form.email}

                        name='email'
                        onChange={validate}
                        id="EmailAdress" type="Email"
                        className="form-control"
                    />
                </div>
                <div className="mb-3"><label htmlFor="password">
                </label>Password<input input value={password}
                    name='password'
                    onChange={validate}
                    id="password" type="password"
                    className="form-control"
                    value={form.password} />
                </div>
                <div className="mb-3"><label htmlFor="">
                </label>check me out<input type="checkbox"
                    className="form-control" />
                </div>
                <button className="btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
