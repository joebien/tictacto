import React, { Component } from 'react';
import Bkgrnd from './img/cityscape.jpg'


const STYLES = 0

const sqr = {
  position : 'relative',
  height:'94%',
  width:'31%',
  border : 'solid teal 1px',
  display : 'flex',
  justifyContent : 'centered',
  flexDirection : 'column',
  margin : '.7%',
  backgroundColor : 'white'
}

const tr = {
  border : 'solid red'
}

const main = {
  position:'relative',
  //padding: '100px 0',
  height : '100%',
  width : '100%',
  border : 'solid black 1px',
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  flexDirection : 'column',
  fontFamily: "'Quicksand', sans-serif",
  //backgroundColor : 'lightgrey'
}

const reset = {
  marginTop : '1%',
  boxShadow : '3px 3px 11px rgba(0,0,0,.6)'
}

const blok = {
  height:'200px',
  width :'200px',
  border: 'solid 1px',
  display : 'flex',
  justifyContent : 'space-around',
  //alignItems : 'center',
  flexDirection : 'column',
  backgroundColor : 'rgba(0,0,0,0)',
  boxShadow : '3px 3px 11px rgba(0,0,0,.6)'
}

const row = {
  display : 'flex',
  alignItems : 'center',
  height : '33%',
  flexDirection : 'row',
  backgroundColor : 'rgba(0,0,0,0)'
}

const xoMenu = {
  position : 'absolute',
  top : 0,
  //border : 'solid red',
  width : '100%',
  height : '100%',
  display:'flex',
  justifyContent : 'space-around'
}

const xoMenuHide = {
        ...xoMenu,...{opacity : .1}
}

const centerBox ={
//border:'solid red'
  marginTop : '1%',
  position : 'relative'
}

const x = {}
const o = {}

const menu ={
  opacity:1,
  display:'flex',
  justifyContent: 'space-around'
}



const xo = {
  //height:'10px',
  fontSize : '62px',
  //lineHeight:'100%',
  //border:'solid red'
}

const xoWin ={
  ...xo,
  ...{color:'teal'}
}

const infoStyle ={
  position : 'relative',
  zIndex : '3',
  display:'flex',
  flexDirection : 'column',
  alignItems: 'center',
  boxShadow : '3px 3px 11px rgba(0,0,0,.6)'
}

const infoHeader = {
  display:'flex',
  flexDirection : 'column',
  justifyContent: 'center',
  //border:'solid red 1px',
  height : '50%',
  fontSize : '70px',
  //textShadow:'2px 2px 4px #A5ADB9',
  margin:'0 0 4%'
}

const infoBody = {
  //border:'solid 1px',
  height : '30%',
  display:'flex',
  flexDirection : 'column',
  justifyContent:'center',
  alignItems: 'center',
  lineHeight : '120%',
  //textShadow:'2px 2px 4px',
 // border : 'solid'
}

const mainBkgrnd = {
  width:'100%',
  height:'100%',
  position:'absolute',
  zIndex:-1,
  opacity:.1
}

const graphRowStyle = {
  display : 'flex',
  flexDirection : 'row'
}

const unitStyler = {
  padding : '3%',
  transform : 'rotate(-35deg)'
}

const clipBox = {
  clipPath : 'inset(0px)',
  //border : 'solid',
  height : '100%',
}

const infoBkgrnd = {
  position:'absolute',
  zIndex : 0,
  //border : 'solid red',
  width : '100%',
  height : '100%'
}

const transDiv = {
  // width : '100%',
  // height : '100%',
  backgroundColor : 'rgba(0,0,0,0)'
}

const InfoBkrnd = (props)=>{
  const unit = <div style = {props.unitStyle}>{props.graphicUnit}</div>
  const graphicRow = new Array(8).fill(unit)
  const graphicArray = new Array(6).fill(graphicRow).map(row => <div style = {graphRowStyle}>{row}</div>)

  return(
          <div style = {clipBox}>{graphicArray}</div>
  )
}

export default class Main extends Component {

  state = {
    block: [ , , , , , , , , ],
    showMenu:{0:false,1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false},
    win:[],
    tokenOptions:[['X','O'],['Mn','Sn'],['Yn','Yg']],
    tokenChoice :['Yn','Yg'],
    squareView :['playMode','winMode','playMode','playMode','playMode','playMode','playMode','playMode','playMode']
  }

  componentDidMount(){
    this.setSquaretoWinMode(4)
  }



  METHODS = 0

  selectToken = (t)=>{
    this.setState({tokenChoice:t})
  }

  showXOmenu = (blno,bool)=> {
    console.log('blno bool ', blno, bool)
    if (this.state.win.length > 2) return

    let prevShow = {...this.state.showMenu}
    for (let sqr in prevShow) {

      if (sqr == blno) {

        setTimeout(() => {
          prevShow[sqr] = true
          this.setState({showMenu: prevShow})
        }, 0)

      }
    }
  }

  checkForWin = ()=>{
    console.log('block ',this.state.block)
    const block = this.state.block
const wins = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
    for (let w = 0; w < wins.length; w++){

      let row = block[wins[w][0]] + block[wins[w][1]] + block[wins[w][2]]

      if (row > 2 || row < -2){
        console.log('WIN',wins[w])
        this.setState({win:wins[w]})
        console.log(this.state.win)
      }
    }
  }

  setXO = (blno, play) => {
if(this.state.win.length > 2) return
    const prevBlock = this.state.block
    prevBlock[blno] = play
    this.setState({block: prevBlock})
    this.showXOmenu(blno,false)
    this.checkForWin()
    console.log('blok ',this.state.blok)
  }

  reset = ()=>{
    this.setState({
      block: [ , , , , , , , , ],
      win:[]
    })
  }

  getTokenOptions = ()=> {
    let options = this.state.tokenOptions.map((o)=> {

      return  <td onClick={()=> this.selectToken(o)}>
                  {
                    this.tokenInfo[o[0]].token +
                    this.tokenInfo[o[1]].token
                  }
              </td>

    })

    return options
  }

  translatePlay = (play)=>{

    if(play === 1)return this.tokenInfo[this.state.tokenChoice[0]].token
    if(play ===-1)return this.tokenInfo[this.state.tokenChoice[1]].token

  }

  tokenInfo = {
    X:{
      graphicUnit : '💧',
      token:'X',
      text:'X marks the spot',
      unitStyle: {
        padding : '3%',
        transform : 'rotate(-35deg)'
      },
      style:{...infoStyle,...{backgroundColor:'rgba(210,234,247,.4)',color:'#b9c5dd', textcolor:'black',lineHeight:'100%',
        stroke: '1px rgba(0,0,0,.7)',
        textShadow:'2px 2px #A5ADB9',
        headerMargin: '10% 0 0'}}
    },
    O:{graphicUnit : '🌂',
      token:'O',
      text:'O also marks the spot',
      unitStyle: {
        padding : '3%',
        transform : 'rotate(0deg)',
        //fontSize : '120%',
        lineHeight : '100%',

      },
      style:{...infoStyle,...{backgroundColor:'#ffffff',color:'#eaf9ed',textcolor:'black',headerMargin: '10% 0 0',textShadow:'2px 2px 4px #A5ADB9',
        stroke: '1px rgba(0,0,0,.7)'}}
    },

    Mn:{graphicUnit: '🌟',
    token:'☾',
      text:<div>Moon {<br/>} Earth satellite{<br/>}73420 Quadrillion Metric Tons{<br/>}Alice destination</div>,
      unitStyle: {
        padding : '3%',
        transform : 'rotate(0deg)',
        //fontSize : '120%',
        lineHeight : '100%',
        filter: 'hue-rotate(180deg) brightness(80%)'

      },
      style:{...infoStyle,...{
        backgroundColor:'rgba(65,111,138,.5)',
        color:'white',
        textcolor:'#ffffff',
        lineHeight:'80%',
        fontWeight : '300',
        textShadow : '2px 2px 2px black'}}
    },

    Sn:{graphicUnit: '☁',
      token:'☀',
      text:<div>Sun{<br/>}G-type main-sequence star{<br/>}
        Milky Way{<br/>}
        Absolute magnitude 4.83
        </div>,
      unitStyle: {
        padding : '3%',
        transform : 'rotate(0deg)',
        fontSize : '120%',
        lineHeight : '100%',
        filter: 'hue-rotate(180deg) brightness(100%)',


      },
      style:{...infoStyle,...{
        backgroundColor:'rgba(233,227,166,.3)',
      color:'#ffffff',textcolor:'rgba(0,0,0,.9)',
      textShadow : '2px 2px 4px #BCBEC0'
        }}
    },

    Yn:{graphicUnit : '🗻',
      token:'陰',
      text:'Cloudy, North side of a hill',
      unitStyle: {
        padding : '3%',
        transform : 'rotate(0deg)',
        fontSize : '120%',
        lineHeight : '100%',
        filter: 'hue-rotate(320deg) brightness(100%)'

      },
      style:{...infoStyle,...{backgroundColor:'rgba(114,181,94,.5)',color:'#F2FCF3',textcolor:'black', headerMargin: '7% 0 0',textShadow:'7px 7px 5px #34512B',lineHeight:'100%',stroke: '1px rgba(0,0,0,.7)'}}
    },

    Yg:{graphicUnit : '🌊',
      token:'陽',
      text:'Sunny, South side of a hill',
      unitStyle: {
        padding : '3%',
        transform : 'rotate(0deg)',
        fontSize : '120%',
        lineHeight : '100%',
        //filter: 'hue-rotate(180deg) brightness(80%)'

      },
      style:{...infoStyle,...{backgroundColor:'rgba(119,187,239,.3',color:'#f9fbff',stroke: '1px rgba(0,0,0,.7)',headerMargin: '7% 0 0',textShadow:'7px 7px 11px #34512B'}}
    }
  }


  setSquaretoWinMode = (sq)=>{
    const tempSquareView = this.state.squareView
    tempSquareView[4] = 'winMode'
    this.setState({squareView: tempSquareView})
  }

  render(){

    return(
            <div style = {main}>
              <img style = {mainBkgrnd} src={Bkgrnd}/>
              <button style = {reset}onClick = {this.reset}>RESET</button>
              <div style = {centerBox} className='centerBox'>

                <LeftInfo tokenInfo = {this.tokenInfo[this.state.tokenChoice[0]]}/>

                <div style = {blok} className='blok'>
                      <Block
                            tokenInfo = {this.tokenInfo}
                            propState = {this.state}
                            setXO = {this.setXO}
                            translatePlay = {this.translatePlay}
                            hideMenu = {this.hideMenu}
                      />
                </div>

                <RightInfo tokenInfo = {this.tokenInfo[this.state.tokenChoice[1]]}/>
              </div>

              <table>
                <tbody>
                  <tr>{this.getTokenOptions()}</tr>
                </tbody>
              </table>

            </div>
    )
  }
}


let key = 0
let blokno = 0
let rowNo = 0


const LeftInfo=(props)=>{
  const {unitStyle, graphicUnit, token, text, style} = props.tokenInfo
  return (
          <div style={style} className='infoLeft'>

            <div style={infoBkgrnd}>
              <InfoBkrnd unitStyle = {unitStyle} graphicUnit = {graphicUnit}/>
            </div>

            <div style = {{...infoHeader,...{margin:style.headerMargin,zIndex:2,WebkitTextStroke:style.stroke}}}>{token}</div>

            <div style={{...infoBody,...{color:style.textcolor,zIndex:2}}}>{text}</div>

          </div>
  )
}

const RightInfo=(props)=>{
  const {unitStyle, graphicUnit, token, text, style} = props.tokenInfo
  return (
          <div style={style} className='infoRight'>

            <div style={infoBkgrnd}>
              <InfoBkrnd unitStyle = {unitStyle} graphicUnit = {graphicUnit}/>
            </div>

            <div style = {{...infoHeader,...{margin:style.headerMargin,zIndex:2,WebkitTextStroke:style.stroke}}}>{token}</div>

            <div style={{...infoBody,...{color:style.textcolor,zIndex:2}}}>{text}</div>

          </div>
  )
}

class XOmenu extends Component {
state={}
show =(bool)=>{
  this.setState({show:bool})
}

  render() {
    const {tokenInfo, blno, setXO, tokenChoice} = this.props
    const menu = this.state.show ? xoMenu : xoMenuHide
    return (
            <div
                    onMouseEnter={()=>this.show(true)}
                    onMouseLeave={()=>this.show(false)}
                    style={menu}
            >

                <div onClick={() => setXO(blno, 1)} className='x'>
                  {tokenInfo[tokenChoice[0]].token}
                </div>
                <div onClick={() => setXO(blno, -1)} className='o'>
                  {tokenInfo[tokenChoice[1]].token}
                </div>

            </div>
    )
  }
}

const Square = (props)=> {

  const { block, win, tokenChoice, squareView} = props.propState
  const {setXO, translatePlay, tokenInfo} = props
  let blno = blokno++
  let xopreStyle = win.includes(blno) ? xoWin : xo
  let xoStyle = {...xopreStyle,...{lineHeight:tokenInfo[tokenChoice[0]].style.lineHeight}}


  const playMode =  <div>
    <div style = {menu}>

      < XOmenu tokenChoice = {tokenChoice} {...props} blno = {blno} />

    </div>
    <div style = {xoStyle}> {translatePlay(block[blno])} </div>
  </div>
  const winMode =  <div style = {transDiv}></div>


  const view = squareView[blno] === 'playMode' ? playMode : winMode

  return(
    <div
            key={key++}
            style={{...sqr,...{border:'solid 1px'}}}>

{view}
    </div>
)
}


const Row = (props)=> {
  const row = new Array(3).fill('').map(() => <Square key ={rowNo++}{...props} />)
  return(


  row

  )

}

const Block = (props)=> {
  blokno = 0
  return(
  new Array(3).fill('').map(() => {

            return (<div style={row} key={key++}>

              <Row {...props}/>

            </div>)

          }
  ))
}




