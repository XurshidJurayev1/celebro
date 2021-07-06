// import React, { useState, useEffect } from 'react'
// import firebase from 'firebase'
// import {DB_CONFIG} from './Config'

// function App() {
//     const [state, setstate] = useState('')
//     const app = firebase.initializeApp(DB_CONFIG)
//     const database = app.database().ref().child('orders')
    
//     useEffect(() => {
//         database.on('value', snap => {
//                 setState({
//                     state: snap.val()
//                 })
//             })
        
//     }, [])


//     return (
//         <div>
            
//         </div>
//     )
// }

// export default App





import React, { Component } from 'react'
import firebase from 'firebase'
import {DB_CONFIG} from './Config'


export class App extends Component {
    constructor(){
        super()


        this.app = firebase.initializeApp(DB_CONFIG)
        this.database = this.app.database().ref().child('speed')


        this.state= {
            orders: []
        }
    }

    componentDidMount(){
        this.database.on('value', snap => {
            this.setState({
                orders: snap.val()
            })
        })
    }


    
    
    render() {
        console.log(this.database);
        console.log(this.state.orders);
        return (
            <div>
                <h2>hello firebase</h2>
                <h2>This value is </h2>
            </div>
        )
    }
}

export default App
