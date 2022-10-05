import React from "react";
import { ReactComponent as Signout } from "./Signout.svg";
import { ReactComponent as Deleteicon } from './Deleteicon.svg'
import { ReactComponent as Signin } from './Signin.svg'

const Navigation = ({ routeChange, currentRoute, user }) => {

    const onDeleteChange = (route) => {

        fetch(`https://quiet-shelf-72514.herokuapp.com/delete/${user.id}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        })
        alert('your account is deleted, and ');
        routeChange(route);


    }

    if (currentRoute === 'home') {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Signout
                    className="f3 link shown dim pointer"
                    onClick={() => routeChange('signin')}
                ></Signout>
                <Deleteicon
                    className="f3 link shown dim pointer pl3"
                    onClick={() => onDeleteChange('signin')}
                ></Deleteicon>
            </nav>
        )
    } else if (currentRoute === 'register') {
        return (
            <nav className="shown" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Signin
                    className="f3 link dim pointer"
                    onClick={() => routeChange('signin')}
                ></Signin>
            </nav>
        )
    }
}

export default Navigation;