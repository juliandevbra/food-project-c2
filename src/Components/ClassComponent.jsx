import { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Tomas'
        }
        console.log('Se creó el constructor')
    }

    componentDidMount(){
        console.log('Che, se montó el componente...')
    }
    componentDidUpdate(){
        console.log('Se actualizó')
    }
    componentWillUnmount(){
        console.log('Se nos fue el componente :(')
    }

  render() {
    console.log('Se ejecutó el render')
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.setState({name: 'Luis'})}>Ese no es mi nombre</button>
      </div>
    )
  }
}
