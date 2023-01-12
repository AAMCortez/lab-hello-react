import "./App.css";

function App() {
   return (
      <div className="App">
         <nav>
            <img src="./Ironhack.png" alt="ironhack" />
            <img src="./top.png" alt="top" />
         </nav>
         <section>
            <h1>Say Hello to ReactJS</h1>
            <p>
               You will learn how to use the most popular frontend library, and
               become a super Ninja developer.
            </p>
            <button>Awesome!</button>
         </section>
         <div className="types">
            <div>
            <img src="./icon1.png" alt="icon1" />
               <h3>Declarative</h3>
               <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
            <img src="./icon2.png" alt="icon2" />
               <h3>Components</h3>
               <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
            <img src="./icon3.png" alt="icon3" />
               <h3>Single-Way</h3>
               <p>A set of immutable values are passed to the component's</p>
            </div>
            <div>
            <img src="./icon4.png" alt="icon4" />
               <h3>JSX</h3>
               <p>Statically-typed, designed to run on modern browsers</p>
            </div>
         </div>
      </div>
   );
}

export default App;
