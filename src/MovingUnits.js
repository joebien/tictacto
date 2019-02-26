import React, { Component } from 'react';


const rainfrequency = 600
const unitQuantity = 9

export default class MovingUnits extends Component {

state = {divitArray:[]}

componentDidMount(){

  this.makeRain()

  setTimeout(()=>this.shiftRain(),5000)

}

componentWillReceiveProps(nextProps){
  if (nextProps.rain !== this.props.rain) this.setState({rain:'stop'})
}



shiftRain=()=>{

  if(this.state.rain === 'stop') return

  let divitArrayTemp2 = this.state.divitArray
  divitArrayTemp2.shift()
  this.setState({divitArray:divitArrayTemp2})
  setTimeout(()=>this.shiftRain(),rainfrequency)

}

  divitrowKey = 0

  makeRain=()=>{
    //if(this.state.rain === 'stop') return

    let divitArrayTemp = this.state.divitArray

    divitArrayTemp.push(<DivitRow key = {this.divitrowKey++}  {...this.props}/>)

    this.setState({divitArray:divitArrayTemp})

    setTimeout(() => this.makeRain(),rainfrequency)

  }

  render() {

  const {winner} = this.props

    const unitStyle = winner.unitStyle
    const bkndStyle = {...bknd,...{backgroundColor : winner.style.backgroundColor}}

    return(

      <div style = {movingUnits}>
        <div style = {bkndStyle}/>
        <div >{this.state.divitArray}</div>
      </div>

    )}

}

class DivitRow extends Component {

  state={}

  componentDidMount(){
    setTimeout(()=>this.setState({go:true}),10)
  }

  render(){
    const {winner} = this.props
    const divitStyle = {...winner.unitStyle,...{color:winner.style.textcolor},...divit}

    const divitRowStyle = this.state.go ? divitRowEnd : divitRowStart
    let k = 0
    let row2 = []

    for( let u = 0; u < unitQuantity; u++){

      row2.push(<div key = {k++} style = {divitStyle}> {winner.movingUnit} </div>)

    }

    let row = <div style={divitRowStyle}>{row2}</div>

    return( row )

}}

const bknd = {
  //border : 'red solid',
  width : '100%',
  height : '100%',
  position : 'absolute',
  left : '35%'
}

const divitRowStart = {
  position : 'absolute',
  top : '0%',
  left :'0%',
  display : 'flex',
  transition : '3s linear'
}

const divitRowEnd = {
        ...divitRowStart,
        ...{
          top:'100%',
          left :'40%'
        }
}

const divit = {
  padding : 0,
  margin : '4%',
}

const movingUnits = {
  border: 'solid 1px',
  position: 'absolute',
  width: '100%',
  height: '120%',
  left: '-35%',
  top: '-15%'
}