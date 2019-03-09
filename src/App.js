import React, { Component } from 'react';
import logo from './img/yinYang.jpg';
import './App.css';
import Main from './Main'

const infoStyle ={
  position : 'relative',
  zIndex : '0',
  display:'flex',
  flexDirection : 'column',
  alignItems: 'center',
  boxShadow : '3px 3px 11px rgba(0,0,0,.6)',
  letterSpacing : '1px',
  color: 'red',
  textAlign: 'center'
}

class App extends Component {

  tokenInfo = {
    X:{
      graphicUnit : '💧',
      movingUnit : '💧',
      token:'X',
      text:'X marks the spot',

      unitStyle: {
        padding : '3% 2.8%',
        transform : 'rotate(-35deg)',
        textShadow:'2px 2px #A5ADB9',
      },

      style:{...infoStyle,
        ...{backgroundColor:'rgba(210,234,247,.5)',
          color:'#b9c5dd',
          textcolor:'black',
          textShadow:'2px 2px 2px #5C6572',
          headerMargin: '10% 0 0',
          playBorderColor : '#EAEDF9',
          playBorder : 'solid 1px rgba(234, 237, 249, 1)'
        }},
          tokenStyle:{
            
            paddingTop : '10%',
            width : '100%',
            height : '100%',
            fontSize : '320%',
            lineHeight : '95%',
            backgroundColor : 'rgba(82,118,131,.7)'
            
          }

    },

    O: {
      graphicUnit: '☂',
      movingUnit: '☂',
      token: 'O',
      text: 'O also marks the spot',

      unitStyle: {
        padding: '4.9% 2.8%',
        transform: 'rotate(14deg)',
        lineHeight: '100%',
        textShadow: '2px 2px 4px #A5ADB9',
        color: 'black'
      },
      style: {
        ...infoStyle,
        ...{
          backgroundColor: '#ffffff',
          color: '#eaf9ed',
          textcolor: 'black',
          headerMargin: '10% 0 0',
          textShadow: '2px 2px 4px black',
          playBorderColor : '#EAEDF9',
          playBorder : 'solid 1px rgba(234, 237, 249, 1)'
        }},
      tokenStyle:{
        paddingTop : '10%',
        width : '100%',
        height : '100%',
        fontSize : '320%',
        lineHeight : '95%',
        backgroundColor : 'rgba(69,117,72,.2)',
      }
      },

    Mn: {
      graphicUnit: '🌟',
      movingUnit: '🌟',
      token: '☾',
      text: <div>Moon {<br/>} Earth satellite</div>,
      unitStyle: {
        padding: '2.3% 2.75%',
        transform: 'rotate(0deg)',
        lineHeight: '100%',
        textShadow: '2px 2px 2px black',
        color: 'white',
      },
      style: {
        ...infoStyle,
        ...{
          backgroundColor: 'rgba(65,111,138,.5)',
          color: 'white',
          textcolor: '#ffffff',
          headerMargin: '8% 0 0',
          textShadow: '2px 2px 2px black',
          playBorderColor : '#EAEDF9',
          playBorder : 'solid 1px rgba(234, 237, 249, 1)'
            }
      },
        tokenStyle:{
          paddingTop : '50%',
          width : '100%',
          height : '100%',
          fontSize : '340%',
          lineHeight : '0%',
          backgroundColor: 'rgba(65,111,138,.5)',
        }
    },

    Sn: {
      graphicUnit: '☁',
      movingUnit: '☁',
      token: '☀',
      text: <div>Sun{<br/>}G-type main-sequence star{<br/>}
       
      </div>,
      unitStyle: {
        padding: '2.6% 3%',
        transform: 'rotate(0deg)',
        lineHeight: '100%',
        filter: 'hue-rotate(180deg) brightness(100%)',
        textShadow: '2px 2px 4px #BCBEC0',

      },
      style: {
        ...infoStyle,
        ...{
          backgroundColor: 'rgba(233,227,166,.3)',
          color: '#F5F598',
          textcolor: 'rgba(0,0,0,.9)',
          textShadow: '2px 2px 2px grey',
          headerMargin: '8% 0 1%',
          playBorderColor : '#EAEDF9',
          playBorder : 'solid 1px rgba(234, 237, 249, 1)',
          
        }},

        tokenStyle:{

          paddingTop : '50%',
          width : '100%',
          height : '100%',
          fontSize : '340%',
          lineHeight : '0%',
          backgroundColor: 'rgba(233,227,166,.3)',
        }

    },

    Yn: {
      graphicUnit: '🗻',
      movingUnit: '陰',
      token: '陰',
      text: 'Cloudy, North side of a hill',
      unitStyle: {
        padding: '2.5% 3%',
        transform: 'rotate(0deg)',
        fontSize: '120%',
        lineHeight: '100%',
        filter: 'hue-rotate(320deg) brightness(100%)',
        textShadow: '7px 7px 5px #34512B',


      },
      style: {
        ...infoStyle, ...{
          backgroundColor: 'rgba(114,181,94,.5)',
          color: '#132927',
          textcolor: 'black',
          headerMargin: '7% 0 0',
          textShadow: '7px 7px 5px #34512B',
          lineHeight: '0%',
          playBorderColor : '#EAEDF9',
          playBorder : 'solid 1px rgba(234, 237, 249, 1)'
        }
      },

      tokenStyle:{

          width : '90%',
        color:'#92b2d4',
          fontSize : '340%',
          backgroundColor : 'rgba(69,114,55,.78)',


      }
    },

    Yg: {
      graphicUnit: '🌊',
      movingUnit: '陽',
      token: '陽',
      text: 'Sunny, South side of a hill',
      unitStyle: {
        padding: '2.4% 3%',
        transform: 'rotate(0deg)',
        fontSize: '120%',
        lineHeight: '100%',
        //filter: 'hue-rotate(180deg) brightness(80%)'
        textShadow: '7px 7px 11px #34512B'
      },
      style: {
        ...infoStyle, ...{
          backgroundColor: 'rgba(119,187,239,.3',
          color: '#fffbf9',
          textcolor: 'black',
          headerMargin: '7% 0 0',
          textShadow: '7px 7px 5px #34512B',
          lineHeight: '0%',
          playBorderColor : '#EAEDF9',
          playBorder : 'solid 1px rgba(234, 237, 249, 1)'
        }
      },

      tokenStyle:{

        //marginBottom : '12%',
        lineHeight: '0%',
        width : '90%',
        fontSize : '340%',
        backgroundColor: 'rgba(119,187,239,.3)',

      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
         
            <img src={logo} className="App-logo" alt="logo" />
        
          <h1 className="App-title">Tic Tac Tao</h1>
        </div>

        <Main
                tokenInfo = {this.tokenInfo}
        />

      </div>
    );
  }
}

export default App;
