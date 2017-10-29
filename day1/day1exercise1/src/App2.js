//Create a new file App2.js, and copy all from this file into is

import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Prompt } from "react-router-dom";
import bookStore from './BookStore';
//Todo: This component must be completed
class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "book": { title: "", info: "" }, isDirty: false }
  }
  onSave = () => {
    this.props.bookStore.addBook(this.state.book)
    this.setState({book: {title: "", info: ""}, isDirty: false})
    this.props.onBookStoreChange();
}
onChange = (event) => {
    const target = event.target;
    const newBookState = this.state.book;
    newBookState[target.name] = target.value

    this.setState((prevState) => ({
        book: newBookState,
        isDirty: true
    }));
}
  render() {
    return (
      <div>
        Title: <input name="title"  />
        Info: <input name="info" />
        <button onClick={this.onSave}>Save</button>
        {/*
         <Prompt
         when={this.state.isDirty}
         message="Yoy have unsaved data that will be lost!"
         />*/}
      </div>
    )
  }
}


//Views start
const Home = () => (
  <div>
    <h2>Home View</h2>
    <p>Info about this site</p>
  </div>
)

const Company = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Our about page</p>
    </div>
  )
}
class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log("props",props);
    this.state = { bookStore: props.bookStore }
  }

  onBookWasAdded = ()=>{
    //Nice and easy way to force a rerender
    this.forceUpdate();
  }


  render() {
    const books = this.state.bookStore.books;
    let bookStore = this.state.bookStore;
    const match = this.props.match;
    return (<div>
      <h2>Our Products</h2>
      <h4>All our great books </h4>
      <ul>
        {books.map((book) => <li key={book.id}>
          <NavLink activeClassName="activeV2"
                   to={`${match.url}/detail/${book.id}`}>{book.title}</NavLink></li>)}
      </ul>
      <NavLink to={`${match.url}/add`}>Add book</NavLink>

      <div style={{ backgroundColor: "lightGray", padding: 5, marginTop: 10 }}>
        <Route path={`${match.url}/add`} render={(props) => <AddBook bookStore={bookStore}
                                                                     onAddBook={this.onBookWasAdded} />} />
        <Route path={`${match.url}/detail/:id`} render={(props) => {
          return (<Details {...props} bookStore={bookStore} />)
        }} />
      </div>
    </div>)
  }
}
//Views end

class Details extends React.Component {
  render() {
    let id = this.props.match.params.id;
    let book = this.props.bookStore.books.filter((book) => {
      return book.id === Number(id);
    })[0];
    return (
      <div style={{ padding: 4 }}>
        <h4 style={{ color: "steelblue" }}>Detailed info for the title: {book.title}</h4>
        <p>Info: {book.info}</p>
        <br />
        <Link to="/products">Products</Link>
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
          <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default class App2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router >
        <div>
          <Header />
          <Switch>
            <Route path="/products" render={(props) => (<Product {...props} bookStore={this.props.bookStore} />)} />
            <Route path="/company" component={Company} />
            <Route component={Home}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}