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
            <section className='hidden1 white' style={{ 'min-height': '110vh' }}>
                <p className="f2" >Give it a try without account?</p>
                <section className='logos center'>
                    <div className='logo hidden1'>
                        <img src='https://miro.medium.com/max/640/1*7Y_aSJVafQQqzXzjdbJaew.jpeg' alt='pic1' />
                    </div>
                    <div className='logo hidden1'>
                        <img src='https://paintbynumberscanvas.com/wp-content/uploads/2020/09/boss-baby-talks-cute-face-paint-by-number.jpg' alt='pic2' />
                    </div>
                    <div className='logo hidden1'>
                        <img src='https://i.pinimg.com/474x/d2/9e/bc/d29ebc811723220b2021901363bbb9b6--what-kind-of-would-you.jpg' alt='pic3' />
                    </div>
                    <div className='logo hidden1'>
                        <img src='https://i.pinimg.com/736x/d6/e5/a3/d6e5a3d1bde79797fb0ccc2db9b8183f.jpg' alt='pic4' />
                    </div>
                </section>
                <p className="f2" >Keep scrolling down</p>
            </section>
        </>
    )
}

export default Signin;