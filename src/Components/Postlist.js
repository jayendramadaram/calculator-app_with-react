import React, { Component } from 'react'
import axios from 'axios'

class Postlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response => {
            this.setState({
                posts:Response.data
            })
            console.log(Response);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
    render() {
         const { posts } = this.state
         const Menu = posts.map((arr) => {
             return (
                <div key={arr.id}>
                 <p>{ arr.title }</p>
                 </div>
             )
         })
        return (
            <div>
                { Menu }
            </div>
        )
    }
}

export default Postlist
