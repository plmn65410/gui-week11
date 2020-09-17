import React,{Component} from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'

class App extends Component{
  state={
    counter:0,
    title:'Counter',
    TeamA:'Man Chester City'
  }
  
updateState=()=>{
  this.setState({
    counter:0
  })
}

incrementCount=()=>{
  this.setState({
    counter:this.state.counter + 1
  })
}

DecrementCount=()=>{
  this.setState({
    counter:this.state.counter - 1
  })
}

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>English Premier League</Text>
        <Text style={styles.text}>Score: {this.state.counter}</Text>
        <Text style={styles.text}>Team: {this.state.TeamA}</Text>
        <Text style={styles.text2} onPress={()=>this.updateState()}>Update</Text>
        <Button title="Increment" color="#F194FF" onPress={()=>this.incrementCount()} />
        <Button title="Decrement" color="#FF8C00" onPress={()=>this.DecrementCount()} />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,justifyContent:'center',
  },
  text:{
    textAlign:'center',marginVertical:8,
  },
  text2:{
    textAlign:'center',
    color:'white',
    backgroundColor:'#48D1cc',
  }
})
export default App;