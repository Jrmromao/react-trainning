import React, { Component } from 'react';

class RegularClass { }
class ComponetClass extends Component { }

const regularClassInstance = new RegularClass();
const ComponetClassInstance = new ComponetClass();

console.log('regularClass', regularClassInstance);
console.log('componetClassinstance', ComponetClassInstance)

class App extends Component {


    constructor() {
        super();
        this.state = {displayBio: false};
        // this.readMode = this.readMode.bind(this);
        // this.showLess = this.showLess.bind(this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

    }
    // readMode(){

    //     console.log('readMore this', this);
    //    this.setState({ displayBio: true })
    // }

    // showLess(){
    //     console.log("showing less");
    //     this.setState({displayBio: false })
    // }

    toggleDisplayBio(){
        this.setState({ displayBio: !this.state.displayBio });
    }


    render() {
        // remove this if statment and take advantage of the turnary exprecion
        // if(!this.state.displayBio)
        // {
        //     bio = null;
        // }
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Joao. <strong>I'm a Project engineer</strong></p>
                <p>I'm learning react to work as a contractor</p>
                {this.state.displayBio ? (
                    <div>
                        <h3>this is bio </h3>
                        <p>I live in Dublin and  I love to code. I'm noe learning react because it is fun</p>
                        <p>Eu gosto muito da minha namorada, mas nao gosto quando ela fica chateada comigo</p>
                        <div><button onClick={this.toggleDisplayBio}>Show Less</button></div>
                    </div>
                ) : (
                     <div>
                         <button onClick={this.toggleDisplayBio}>Read More</button>
                     </div>
                )
                }
            </div>
        )
    }
}

export default App;