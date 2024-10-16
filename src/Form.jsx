import React from "react";


export default class Form extends React.Component {
    
    state = {
        title: 'javascrpt'
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            title: e.target.value, 
        })
    }
    
    render() {
        const { title } = this.state;
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter title" 
                    value={title} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}