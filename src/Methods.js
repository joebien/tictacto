import React, { Component } from 'react'



export default class Methods extends Component {


  method = {
      reset: function () {
        this.setState({
          squares: [, , , , , , , ,],
          win: [],
          visibleSquares: [true, true, true, true, true, true, true, true, true],
          rain: false
        })
      },

      getTokenOptions : function() {
            let k = 0
        const options = this.state.tokenOptions.map((o)=> {
          return  <td
                  key = {k++}
                  onClick={()=> {
                    this.selectToken(o)
                  }}
          >

            {
              this.tokenInfo[o[0]].token +
              this.tokenInfo[o[1]].token

            }

          </td>

        })
        return options
      },

    translatePlay: function(play){

      if(play === 1)return this.tokenInfo[this.state.tokenChoice[0]].token
      if(play ===-1)return this.tokenInfo[this.state.tokenChoice[1]].token

    },

    play: function(blno, play){
      if(this.state.win.length > 2) return
      const prevBlock = this.state.squares
      prevBlock[blno] = play
      const preVisible = this.state.visibleSquares
      preVisible[blno] = false
      this.setState({visibleSquares:preVisible})
      this.setState({squares: prevBlock})
      this.checkForWin()
    },

    setSquaretoClearMode: function(win){
      let tempSquares = this.state.squares

      tempSquares = tempSquares.map((view,i)=>{
        if(win.includes(i)) {return view}
        else {return ''}
      })

      this.setState({squares: tempSquares})
    },

    checkForWin: function(){

      const squares = this.state.squares
      const wins = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

      for (let w = 0; w < wins.length; w++){

        let row = squares[wins[w][0]] + squares[wins[w][1]] + squares[wins[w][2]]

        if (row > 2 || row < -2){
          this.setState({win:wins[w]})
          let winner = squares[wins[w][0]] === 1 ? this.state.tokenChoice[0] : this.state.tokenChoice[1]
          this.setState({
            winner:winner,
            rain:true
          })
          this.setSquaretoClearMode(wins[w])

        }
      }
    },

    selectToken: function(t){
      const setChange = () =>{
        return new Promise ((resolve)=>{

          this.setState({tokenChoice: t})
          resolve('succes')}
        )
      }

      setChange().then( ()=>this.checkForWin() )

    },
  }
}

