
import './App.css';
import React, { useEffect, useState } from 'react';
import Navigation from './component/Navigation/Navigation';
import Logo from './component/Logo/Logo'
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm'
import Count from './component/Count/Count';
import FaceRecognition from './component/FaceRecognition/FaceRecognition';
import Signin from './component/Signin/Signin';
import Register from './component/Register/Register';
import BackgroundControl from './component/ParticlesJs/BackgroundControl';
import ParticlesJs from './component/ParticlesJs/ParticlesJs';
import WithoutAccount from './component/WithoutAccount/WithoutAccount';



function App() {
  const [input, setInput] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
  );
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 500);
  }, [box])





  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    });
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    setBox(box);
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onPictureSubmit = () => {
    setImgUrl(input);
    fetch('https://quiet-shelf-72514.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://quiet-shelf-72514.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id
            })
          }).then(response => response.json())
            .then(count => {
              //this.setState(Object.assign(this.state.user, { entries: count }));
              setUser(() => { return Object.assign(user, { entries: count }) }); //hook
              //this.setState({ user: { entries: count } });
            })
            .catch(console.log)
          displayFaceBox(calculateFaceLocation(response))
        } else {
          alert('wrong');
          return;
        }
      })
      .catch(console.log)
  }

  const onRouteChange = (route) => {
    if (route === 'signin') {
      setImgUrl('');
      setRoute(route);
    } else {
      setRoute(route);
    }
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((ele) => observer.observe(ele));
  const hidden1Elements = document.querySelectorAll('.hidden1');
  hidden1Elements.forEach((ele) => observer.observe(ele));

  return (
    <div className='App '>
      <ParticlesJs />
      <br />
      <div className='ml4 mr4' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo routeChange={onRouteChange} />
        <BackgroundControl />
        <Navigation routeChange={onRouteChange} currentRoute={route} id={user.id} />
      </div>
      {
        route === 'home'
          ? <div className='hidden'>
            <Count entries={user.entries} name={user.name} />
            <ImageLinkForm inputChange={onInputChange} pictureSubmit={onPictureSubmit} />
            <FaceRecognition box={box} imageUrl={imgUrl} />
          </div>
          : (
            route === 'signin'
              ?
              <>
                <div className='hidden1'>
                  <p className='shown f1 white grow'> Face Detection App</p>
                </div>
                <Signin
                  routeChange={onRouteChange} loadUser={loadUser}
                  inputChange={onInputChange} pictureSubmit={onPictureSubmit}
                  box={box} imageUrl={imgUrl}
                />
                <section className='hidden1 shown white' style={{ 'minHeight': '95vh' }}>
                  <WithoutAccount />
                </section>
                <section className='hidden1' style={{ 'minHeight': '70vh' }}>
                  <p className="f2 white" >Here you go</p>
                  <ImageLinkForm inputChange={onInputChange} pictureSubmit={onPictureSubmit} />
                  <FaceRecognition box={box} imageUrl={imgUrl} />
                </section>
              </>
              :
              <section className='hidden'>
                <Register loadUser={loadUser} routeChange={onRouteChange} />
              </section>
          )
      }
      <h2 className='hidden white f4 shown'>{time} </h2>
    </div >

  )
}

export default App;
