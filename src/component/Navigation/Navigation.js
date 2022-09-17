import React from "react";

/* class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    onDeleteChange = () => {

        fetch('http://localhost:3000/delete/:id', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.state.id
            })
        }).then(res => res.json()).then(user => {
            //console.log(data);

            alert('your account id deleted');
            this.props.routeChange('home');

        })
    }

    render() {
        const { routeChange, currentRoute } = this.props;
        if (currentRoute === 'home') {
            return (
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p
                        className="f3 link white underline shown dim pa3 pointer"
                        onClick={() => this.onDeleteChange('signin')}
                    >Delet Acct</p>
                    <p
                        className="f3 link white underline shown dim pa3 pointer"
                        onClick={() => routeChange('signin')}
                    >Sign out</p>
                </nav>
            )
        } else if (currentRoute === 'register') {
            return (
                <nav className="shown" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p
                        className="f3 link white underline dim pa3 pointer"
                        onClick={() => routeChange('signin')}
                    >Signin</p>
                </nav>
            )
        }
    }

} */


const Navigation = ({ routeChange, currentRoute, id }) => {

    const onDeleteChange = (route) => {

        fetch('http://localhost:3000/delete/:id', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        }).then(res => res.json()).then(user => {
            //console.log(data);
            alert('your account id deleted');
            routeChange(route);

        })
    }

    if (currentRoute === 'home') {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/*                 <p
                    className="f3 link white underline shown dim pa3 pointer"
                    onClick={() => routeChange('signin')}
                >Delet Acct</p> */}
                <p
                    className="f3 link white underline shown dim pa3 pointer"
                    onClick={() => routeChange('signin')}
                >Sign out</p>
            </nav>
        )
    } else if (currentRoute === 'register') {
        return (
            <nav className="shown" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    className="f3 link white underline dim pa3 pointer"
                    onClick={() => routeChange('signin')}
                >Signin</p>
            </nav>
        )
    }
}

export default Navigation;