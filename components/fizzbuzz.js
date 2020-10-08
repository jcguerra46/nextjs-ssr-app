import React, { Component } from 'react';

class FizzBuzz extends Component {
    constructor() {
        super();
        this.state = {
          count: 1,
          fizzBuzz: ''
        }
    }
      
    render() { 
        const numberStyle = {
            fontSize: '32px',
        };
        
        return (
            <section className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 style={numberStyle}> {this.state.fizzBuzz || this.state.count}</h2>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary">
                                <input onClick={this._decrement.bind(this)} type="radio" /> -
                            </label>
                            <label className="btn btn-secondary">
                                <input onClick={this._increment.bind(this)} type="radio" /> +
                            </label>
                        </div>               
                    </div>
                </div>
            </section>
        );
    }
      
    _fizzBuzz(num) {
    if (num % 15 === 0) {
            this.setState({fizzBuzz: 'FizzBuzz'});
        } else if (num % 5 === 0) {
            this.setState({fizzBuzz: 'Buzz'});
        } else if (num % 3 === 0) {
            this.setState({fizzBuzz: 'Fizz'});
        } else {
            this.setState({fizzBuzz: ''});
        }
    }
      
    _decrement() {
        if (this.state.count > 1) {
            this.setState({count: --this.state.count});
            this._fizzBuzz(this.state.count);
        }
    }
      
    _increment() {
        if (this.state.count < 100) {
            this.setState({count: ++this.state.count});
            this._fizzBuzz(this.state.count);
        }
    }
}

export default FizzBuzz;
