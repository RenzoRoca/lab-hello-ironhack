
import './App.css';

function App() {
    return ( 
    <div className="App">
        <header className="App-header">
            <nav className="navbar">
                <div className="container">
                    <a href="" ><img src='/images/ironhack-logo.svg' /></a>
                    <img src='/images/menu-top.svg' />
                </div>
            </nav>
            <div className="container app-intro">
                <h1 className="col-6 text-lg fw-bold title" >Say hello to ReactJS</h1>
                <p className="col-6">You will learn how to use the most popular frontend library and become a super Ninja developer</p>
                <button className="btn btn-light title-button">Awesome!</button>
            </div>
        </header>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src='/images/icon1.png' />
                    <h4 className="fw-bold text-lg">Declarative</h4>
                    <p className="text-black-50">React makes it painless to create interactive UIs</p>
                </div>
                <div className="col">
                    <img src='/images/icon2.png' />
                    <h4 className="fw-bold text-lg">Components</h4>
                    <p className="text-black-50">Build encapsulated components that manage their state</p>
                </div>
                <div className="col">
                    <img src='/images/icon3.png' />
                    <h4 className="fw-bold text-lg">Single-way</h4>
                    <p className="text-black-50">A set of immutable values are passed to the components</p>
                </div>
                <div className="col">
                    <img src='/images/icon4.png' />
                    <h4 className="fw-bold text-lg" >JSX</h4>
                    <p className="text-black-50">Statically-typed, designed to run on modern browsers</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;