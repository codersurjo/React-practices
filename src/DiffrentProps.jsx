
// const DiffrentProps = ({task}) => {
//     return (
//         <div>
//             <ul>
//                 <li>{task}</li>
//             </ul>
//         </div>
//     );
// };


// condition 1

// const DiffrentProps = ({task,isDone}) => {
//     if(isDone == false){
//         return (
//             <li>Finished: {task}</li>
//         )
//     }
//     else{
//         return (
//             <li>Work on: {task}</li>
//         )
//     }
// };


// condition based rendering 2

// const DiffrentProps = ({task,isDone}) => {
//     if(isDone){
//         return (
//             <li>Finished: {task}</li>
//         )
//     }
//     else{
//         return (
//             <li>Work on: {task}</li>
//         )
//     }
// };


// Conditional Rendering - 3 (ternary operator)
// const DiffrentProps = ({task,isDone}) => {
//     return(
//         <li>{isDone ? 'Finished' : 'Work ON'} : {task} </li>
//     )
// };

//Conditional Rendering option 4 (using and operator)

// const DiffrentProps = ({task,isDone}) => {
//     return(
//         <li>{task} {isDone && ': Worked Done'}</li>
//     )
// };

//Conditional Rendering option 5 (using OR operator)

// const DiffrentProps = ({task,isDone}) => {
//     return(
//         <li>{task} {isDone || ': Not Done'}</li>
//     )
// };

//Conditional Rendering option 6 

const DiffrentProps = ({task,isDone}) => {
    let listItem ;
    
     if(isDone){
        listItem = <li>Finish: {task}</li>
     }
     else{
        listItem = <li>Work On: {task}</li>
     }
     return listItem;
};






export default DiffrentProps;