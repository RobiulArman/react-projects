// export default function Todo({task}){
//     return (
//         <li>Task: {task}</li>
//     )
// }

// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
// else{
//     return <li>work on:{task}</li>
// }
// }

export default function Todo({task,isDone}){
    return (
        <li>{isDone ? 'finished' : 'work on'}: {task} </li>
    )
}