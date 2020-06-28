import React from 'react';
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import './components/body/body.scss'
import './components/form/form.scss'




// Main 
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: ''
    }
  }

  buttonHandler = e => {
    e.preventDefault();
    let words = this.state;
    console.log(words);
    this.setState({ words })
  }

  urlHandler = e => {
    let url = e.target.value;
    this.setState({ url }); // re-render 
  }

  methodsHandler = e => {
    let method = e.target.value;
    this.setState({ method })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.buttonHandler}>
          <label>URL: </label>

          <input type='text' name='url' onChange={this.urlHandler} />
          <input type='submit' value='GO!' />
          <br></br>

          <input type='radio' name='method' value='GET' onChange={this.methodsHandler} />
          <label>GET </label>
          <input type='radio' name='method' value='PUT' onChange={this.methodsHandler} />
          <label>PUT  </label>
          <input type='radio' name='method' value='POST' onChange={this.methodsHandler} />
          <label>POST  </label>
          <input type='radio' name='method' value='DELETE' onChange={this.methodsHandler} />
          <label>DELETE </label>

        </form>
        <section><h3><span>{this.state.method}</span>{this.state.url}</h3></section>

      </div>

    )
  }
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}



export default App;
