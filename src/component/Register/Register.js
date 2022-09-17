import React, { useState } from "react";

function Register({ loadUser, routeChange }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitRegister = () => {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression for email
        if (email.match(mailFormat)) {
            fetch('https://quiet-shelf-72514.herokuapp.com/register', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            }).then(res => res.json()).then(user => {
                if (user.id) {
                    loadUser(user);
                    routeChange('home');
                }
            })
        } else {
            return alert('please use valid email format')
        }
    }
    return (
        <article className="br2 ba mv4 w-100 w-50-m w-25-l mw5 center shown shadow-5" >
            <main className="pa4 black-80">
                <div className="measure shown">
                    <fieldset id="register" className="ba b--transparent ph0 mh0">
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">User Name</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="name"
                                onChange={onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                onChange={onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 br3 input-reset ba b--white hover-white bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Register"
                            onClick={onSubmitRegister}
                        />
                    </div>
                </div>
            </main>
        </article >
    )
}

export default Register;