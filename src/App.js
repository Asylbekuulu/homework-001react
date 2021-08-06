const styles = {
  main: {
    fontSize: 40,
    color: "red"
  },
  text: {
    fontSize: 25,
    color: "green"
  }
}

function App() {
  return (
    <div>
      <h1 style={styles.main}>My page</h1>
      <p style={styles.text}>My name is Erzhan and i'm frontend developer</p>
    </div>
  );
}

export default App;
