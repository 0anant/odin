
function App() {

  return (
    <h1>
      <PostComponent></PostComponent>
    </h1>
  )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

function PostComponent() {
  return <div style={style}>
    <div style={{display: "flex"}}>
      <img src="src/assets/react.svg" style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }}/>
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>
          100xdevs
        </b>
        <div>23,888 followers</div>
        <div>12m</div>
      </div>
    </div>
     <div style={{fontSize: 12}}>
        What to know how to win big ? check out these folks won $6000 in bounties.
      </div>
  </div>
}
export default App
