import tasks from "../tasks"


function App() {
  
  // Filtro di Tasks completati
  const completedTasks = tasks.filter((curElem, i) => {
    return curElem.state == "completed";
  });

    // Filtro di Tasks non completati
  const notCompletedTasks = tasks.filter((curElem, i) => {
    return curElem.state != "completed";
  });

// Funzione per displayare i task in lista
  function display(a) {
    let x = a.map((curElem, i) => (
    <li key={i}>
      <div> <span className="titolo">{curElem.title}</span> <span className="stato">{curElem.state}</span></div>
      <p>Priority: {curElem.priority}</p>
      <p>Est. Time: {curElem.estimatedTime}</p>
      </li>))
    return x
  }

  return (
    <>
      {/* Header */}
      <header>
        <h1>Taks Manager</h1>
      </header>

      {/* Not completed Tasks */}
      <div className="corpo">
        <div className="counter">Current Tasks ({notCompletedTasks.length})</div>
        <ul>
          {display(notCompletedTasks)}
        </ul>
      </div>

      <hr />

      {/* Completed Tasks */}
      <div className="corpo">
      <div className="counter">Current Tasks ({completedTasks.length})</div>
        <ul>
          {display(completedTasks)}
        </ul>
      </div>
    </>
  )
}

export default App
