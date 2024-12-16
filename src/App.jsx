import tasks from "../tasks"


function App() {
  const completedTasks = tasks.filter((curElem, i) => {
    return curElem.state == "completed";
  });
  const notCompletedTasks = tasks.filter((curElem, i) => {
    return curElem.state != "completed";
  });

  function display(a){
    let x=a.map((curElem, i) => (<li key={i}>{curElem.title}</li>))
    return x
  } 

  return (
    <>
      <header>Taks Manager</header>
      <div>
        <ul>
          {display(notCompletedTasks)}
        </ul>
      </div>
      <hr />
      <div>
      <ul>
          {display(completedTasks)}
        </ul>
      </div>
    </>
  )
}

export default App
