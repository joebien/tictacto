import React, { Component } from 'react'
import Bkgrnd from './img/cityscape.jpg'
import MovingUnits from './MovingUnits'
import Methods from './Methods'

export default class Main extends Methods {

  componentWillMount(){
    this.tokenInfo = this.props.tokenInfo
  }

  state = {
    // squares: [ , , , , , , , , ],
    squares: [],
    win: [],
    winner: 'X',
    tokenOptions: [['X','O'],['Mn','Sn'],['Yn','Yg']],
    tokenChoice: ['X','O'],
    visibleSquares: [true,true,true,true,true,true,true,true,true],
    rain: false
  }

  componentDidMount(){

    //this.checkForWin()

  }

  delayRender =()=>{
    setTimeout(
  ()=> this.setState({go:true}),1500
    )
}
  //Bind Methods
  selectToken = this.method.selectToken.bind(this)

  checkForWin = this.method.checkForWin.bind(this)

  setSquaretoClearMode = this.method.setSquaretoClearMode.bind(this)

  play = this.method.play.bind(this)

  reset = this.method.reset.bind(this)

  getTokenOptions = this.method.getTokenOptions.bind(this)

  translatePlay = this.method.translatePlay.bind(this)


  translateToProp = (play)=>{
    // console.log('play ',play)
    if(play === 1)return this.tokenInfo[this.state.tokenChoice[0]]
    if(play ===-1)return this.tokenInfo[this.state.tokenChoice[1]]
  }

  render(){
  
    return(
            <div className = 'main'>
              <div style={subBkgrnd} />
              <img style={mainBkgrnd} src={Bkgrnd} alt='cityscape'/>
              <button className ='resetStyle'
                      onClick = {this.reset}>RESET</button>
              <div className='centerBox'>

                <LeftInfo tokenInfo = {this.tokenInfo[this.state.tokenChoice[0]]}/>

                  <Block
                          tokenInfo = {this.tokenInfo}
                          propState = {this.state}
                          play = {this.play}
                          translatePlay = {this.translatePlay}
                          translateToProp ={this.translateToProp}
                          hideMenu = {this.hideMenu}
                  />

                <RightInfo tokenInfo = {this.tokenInfo[this.state.tokenChoice[1]]}/>
              
              </div>

              {/* <div style = {tableBox}> */}
  
              <div className = 'tokenOptions'>
                <div className = 'toolBox'>
                  <div className = 'tokenTipL'>Choose your symbols &#8594;</div>
                </div>
                <div className = 'options'>{this.getTokenOptions()}</div>
                <div className = 'tokenTipR'></div>
              </div>

              {/* </div> */}
      </div>
    )
  }
}


const infoBkgrnd = {
  position:'absolute',
  zIndex : 0,
  //border : 'solid red',
  width : '100%',
  height : '100%'
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
  //border:'dotted green 3px',
  height : '30%',
  display:'flex',
  flexDirection : 'column',
  justifyContent:'center',
  alignItems: 'center',
  lineHeight : '120%',
  //textShadow:'2px 2px 4px',
  // border : 'solid'
}
const infoText = {
  backgroundColor : 'rgba(255,255,255,.5)',
  padding : '2px 2px 0'
}
const LeftInfo=(props)=>{
  const {unitStyle, graphicUnit, token, text, style} = props.tokenInfo
  return (
          <div style={style} className='infoLeft'>

            <div style={infoBkgrnd}>
              <InfoBkrnd unitStyle = {unitStyle} graphicUnit = {graphicUnit}/>
            </div>

            <div style = {{...infoHeader,
              ...{margin:style.headerMargin,
                zIndex:2,
                WebkitTextStroke:style.stroke}
            }}>{token}</div>

            <div style={{...infoBody,
              ...{color:style.textcolor,
                zIndex:2}
            }}>
              <span style = {infoText}>{text}</span></div>

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

            <div style = {{...infoHeader,
              ...{margin:style.headerMargin,
                zIndex:2,
                WebkitTextStroke:style.stroke}
            }}>{token}</div>

            <div style={{...infoBody,
              ...{color:style.textcolor,
                zIndex:2,}
            }}>
              <span style = {infoText}>{text}</span>
            </div>

          </div>
  )
}
const InfoBkrnd = (props)=>{
  const graphRowStyle = {
    display : 'flex',
    flexDirection : 'row'
  }
  const clipBox = {
    clipPath : 'inset(0px)',
    //border : 'solid',
    height : '100%',
    width : '100%'
  }
  let k = 0
  let j = 1

  let graphicRow = []

  for (let gu=0; gu<9 ; gu++ ){
    graphicRow.push(<div key = {k++} style = {props.unitStyle}>{props.graphicUnit}</div>)
  }

  let graphicArray = []

  for (let gr=0; gr<7 ; gr++){
    graphicArray.push(<div key = {j++} style = {graphRowStyle}>{graphicRow}</div>)
  }

  return(
          <div style = {clipBox}>{graphicArray}</div>
  )
}


class XOmenu extends Component {
state={fullHide:false}

show =(bool)=>{
  this.setState({show:bool})
}

  render() {
    const {visibleSquares, squares, win, tokenChoice} = this.props.propState
    const {tokenInfo, blno, play,} = this.props
    const preMenu = this.state.show ? xoMenu : xoMenuHide
    const menu = visibleSquares[blno] && (win.length < 2) && squares[blno] === undefined   ? preMenu : {...preMenu,...{opacity:0}}
    // const menu = squares[blno] ? {...postPreMenu,...{opacity:0}} : postPreMenu

    return (
            <div
                    onMouseEnter={()=>this.show(true)}
                    onMouseLeave={()=>this.show(false)}
                    style={menu}
            >

                <div onClick={() => {
                  play(blno, 1)
                }}
                     className='x'>
                  {tokenInfo[tokenChoice[0]].token}
                </div>

                <div onClick={() => {
                  play(blno, -1)
                }}
                     className='o'>
                  {tokenInfo[tokenChoice[1]].token}
                </div>

            </div>
    )
  }
}

let blokno = 0

//////////////////////////////////////////////////////////////////////

const Square = (props)=> {
 
  const { squares, win, visibleSquares} = props.propState
  const {translateToProp} = props
  let blno = blokno++
  const TokenInPlay = translateToProp(squares[blno])


  const tokenStyle = TokenInPlay ? TokenInPlay.tokenStyle : null

  const {lineHeight, color, textShadow, playBorder} = TokenInPlay?
          TokenInPlay.style :
          {lineHeight:'', color:'', textShadow:'', playBorder:'solid 1px'}

  const {token} = TokenInPlay? TokenInPlay : ''

  const square = {
    position : 'relative',
    padding : '0px 0px 0px',
    lineHeight: lineHeight,
    color: color,
    textShadow : textShadow,
    //backgroundColor : backgroundColor,
    height : '99%',
    width : '99%',
    textAlign: 'center'
  }

  let loseStyle = win.length > 2? {
    opacity:0
  } : {}


  let squareStyle = win.includes(blno) ? square : {...square,...loseStyle}

  const view = visibleSquares[blno] ? 'sqr + white' : 'sqr + {sqrClass}'

  const border = {
display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    boxSizing: 'border-box',
    height : '100%',
    width : '100%',
    border : playBorder,
    opacity : 1,
    position : 'relative',
    // zIndex : 111
  }

  return(
    <div style = {border}>
                <div style = {squareStyle} className = {view} >

                    <XOmenu  {...props} blno = {blno} />

                    <div style = {tokenStyle}>
                    {token}
                    </div>

                </div>
    </div>
  )
}
const Block = (props)=> {
  let k = 0
  blokno = 0
  const{tokenInfo} = props
  const{winner, rain} = props.propState
  const win = tokenInfo[winner]
  const sqrs = new Array(9).fill('').map(() => {

    return (<Square key={k++}{...props}/>)

  })

  sqrs.push(<div key = {k++} className='blockGap1 gap'/>)
  sqrs.push(<div key = {k++} className='blockGap2 gap'/>)
  sqrs.push(<div key = {k++} className='blockGap3 gap'/>)
  sqrs.push(<div key = {k++} className='blockGap4 gap'/>)
  sqrs.push(<div key = {k++} className='blockGap5 gap'/>)
  sqrs.push(<div key = {k++} className='blockGap6 gap'/>)
  sqrs.push(<div key = {k++} className='blockGap7 gap'/>)
  sqrs.push(<div key = {k++} className='blockGap8 gap'/>)

  let blokBknd = rain ? <MovingUnits

          winner = {win}
  /> : null

    return(
            <div className='blok'>

              {blokBknd}

              {sqrs}

            </div>)
}
const xoMenu = {
  position : 'absolute',
  top : 0,
  fontSize : '240%',
  width : '100%',
  height : '100%',
  display:'flex',
  justifyContent : 'space-around'
}
const xoMenuHide = {
        ...xoMenu,
        ...{opacity : .1}
}
const mainBkgrnd = {
  width:'100%',
  height:'100%',
  position:'absolute',
  zIndex:-1,
  opacity:.3,

}
const subBkgrnd = {
  width:'100%',
  height:'100%',
  position:'absolute',
  zIndex:-1,
  opacity:.3,
  backgroundColor : '#d5dadb'
}








