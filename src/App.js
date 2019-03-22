import React, { Component } from 'react';

import {
  SectionsContainer,
} from 'react-fullpage';

import {
  Nav, Navbar
} from 'react-bootstrap';

import logo from './img/logo.png';
import './App.css';

import {Slide1, Slide2, Slide3, Slide4} from './Slides.js';
import {Cart, Item} from './Cart.js';

import firebase from 'firebase';
import firebaseui from 'firebaseui';

let counter = 1;

class App extends Component {
  constructor(){
    super();

    this.sendItem = this.sendItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      cartContents: [],
      cartItems: [],
      cartDisplay: false,
      user: null
    }

    this.handleAuth = this.handleAuth.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clear = this.clear.bind(this);
  }

    componentWillMount() {
      var config = {
        apiKey: "AIzaSyBXHfeyaJxIRvm8nje9c2RUPonEd5XGv3o",
        authDomain: "baleadas-aebd9.firebaseapp.com",
        databaseURL: "https://baleadas-aebd9.firebaseio.com",
        projectId: "baleadas-aebd9",
        storageBucket: "baleadas-aebd9.appspot.com",
        messagingSenderId: "196711900564"
      };

      firebase.initializeApp(config);
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function () {
          window.location.assign('<your-privacy-policy-url>');
        }
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

      var initApp = (callback) => {
        console.log(callback);

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;

            user.getIdToken().then(function (accessToken) {
              callback({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              });
            });


          } else {
            console.log("El usuario no ha entrado.");
          }
        }, function (error) {
          console.log(error);
        });
      };

      initApp(this.handleAuth);
      this.db = firebase.firestore();
    }

  handleAuth(user){
    console.log(user.displayName);

    let constructItems = (data) => {
      let counter = 1;
      let arr = [];

      if (data) {
        data.cartItems.map((item) => {
          arr.push(<Item title={"Baleada " + counter} body={item.body} price={item.price} key={counter} del={this.deleteItem}/>);
          counter++;
        })  
      }
      
      this.setState({
        user,
        cartContents: arr,
        cartItems: data ? data.cartItems : []
      });

      console.log("cart loaded")
    }

    this.db.collection("carritos").doc(user.uid).get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        constructItems(doc.data());
      } else {
        // doc.data() will be undefined in this case
        constructItems(null);
        console.log("El carrito del usuario no se encontró.");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  sendItem(title, body, price){
    if (this.state.user) {
      let arr = this.state.cartContents;
      let arr2 = this.state.cartItems;
      let name = "Baleada " + counter;

      arr.push(<Item title={name} body={body} price={price} key={counter} del={this.deleteItem}/>);
      arr2.push({title, body, price});

      this.setState({cartContents: arr, cartItems:arr2, cartDisplay:true});

      counter ++;
    }else{
      this.setState({
        cartDisplay: true
      });
    }
  }

  deleteItem(index){
    var nContents = this.state.cartContents;
    nContents.shift(index, 1);

    var nContents2 = this.state.cartItems;
    nContents2.shift(index, 1);

    this.setState({
      cartContents: nContents,
      cartItems: nContents2
    });
  }

  clear() {
    this.setState({
      cartContents: [],
      cartItems: [],
      cartDisplay: false
    })
  }

  handleSignOut() {
    firebase.auth().signOut().then(function () {
      alert("Cierre de sesión exitoso");
      window.location.reload(false);
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
     let options = {
        sectionClassName: 'section',
        anchors: ['inicio', 'historia', 'estudio', 'pedir'],
        scrollBar: false,
        navigation: true,
        verticalAlign: false,
        arrowNavigation: true
    };

    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Navbar.Brand href="#home">
        <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        Baleadas Conchita</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#historia">La Baleada</Nav.Link>
            <Nav.Link href="#estudio">Estudios</Nav.Link>
            <Nav.Link href="#pedir">Hacer una Orden</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <Cart
          cartContents={this.state.cartContents}
          cartItems={this.state.cartItems}
          shown={this.state.cartDisplay}
          user={this.state.user}
          db={this.db}
          clear={this.clear}
          signOut={this.handleSignOut}
        />
        <SectionsContainer className="SectionsContainer" {...options}>
          <Slide1/>
          <Slide2/>
          <Slide4/>
          <Slide3 send={this.sendItem}/>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
