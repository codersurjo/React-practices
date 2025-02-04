import Actor from "./Actor";
import DiffrentProps from "./DiffrentProps";
import Singer from "./Singer";

const App = () => {
  const DefaultCss = {
    width:"800px",
    margin: "0 auto",
    textAlign: "center"
  }

  // Actor jsx 
  const Actors = ['sakib', 'Ruble', 'Jasim', 'Anup'];

  // Singer Object passing

  const Singers = [
    {name: 'Runa Laila', Age:60},
    {name: 'Runa Laila 1', Age:61}
  ]

  return (
    <div style={DefaultCss}>
       <h2>React Practics - Part-1</h2>
       {/* <Device name="Mobile" price="30"></Device>
       <Device name="laptop" price="55"></Device>
       <Student name="Arun" grade="80"></Student>
       <Student name="Shemol" grade="90"></Student>
       <Student name="Anup"></Student> */}

        {/* Diffrent way props conditional rendering */}
        <DiffrentProps task="Learn React" isDone={true}></DiffrentProps>
        <DiffrentProps task="Diffrent Way to Working" isDone={false}></DiffrentProps> 

        {/* Actor component  */}
        <h3>Array Based</h3>
        {
          Actors.map(actor => <Actor name={actor}></Actor>)
        }

        
        {/* // singers jsx file  */}

        <h3>Object Based Mapping</h3>
        {
          Singers.map(singer => <Singer singer={singer}></Singer> )
        }
      
    </div>
  );
};


// // using props 
// function Device(props){
//   return (
//     <>
//       <h5>This is Device: {props.name}</h5>
//       <h4>Price:{props.price}</h4>
//     </>
//   )
// }


// // using props with destructing

// function Student({name,grade=0}){
//   return(
//     <div>
//         <h2>This is a student</h2>
//         <p>Name: {name}</p>
//         <p>Number: {grade}</p>
//     </div>
//   )
// }

export default App;


