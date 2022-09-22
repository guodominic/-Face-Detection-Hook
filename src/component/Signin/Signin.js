import React, { useState } from "react";


function Signin({ loadUser, routeChange }) {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }

    const onSubmitSignIn = () => {
        if (signInEmail && signInPassword) {
            fetch('https://quiet-shelf-72514.herokuapp.com/signin', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: signInEmail,
                    password: signInPassword
                })
            })
                .then(res => res.json()).then(user => {
                    //console.log(data);
                    if (user.id) {
                        loadUser(user);
                        routeChange('home');
                    } else {
                        return alert('Incorrect email and password combination')
                    }
                })
        } else {
            alert('email, password cannot be empty')
        }
    }

    return (
        <>
            <article className="br2 ba mv4 w-100 w-50-m w-25-l mw5 center shown shadow-5" >
                <main className="pa4 black-80">
                    <div className="measure shown">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
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
                            <input className="b ph3 br3 pv2 input-reset ba hover-white b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in"
                                onClick={onSubmitSignIn}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => routeChange('register')} className="pointer f6 link dim black db">Register</p>
                        </div>
                    </div>
                </main>
            </article >
        </>
    )
}

export default Signin;