import './App.css';

function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);
}

function App() {
  const buscadores = ['http://www.google.com',
    'http://www.bing.com',
    'http://www.yahoo.com'];
  return (
    <div>
<center>
<h1>Los buscadores mas usados y recomendados</h1>
</center>
<hr></hr>

      <center>
      <h3>primer buscador:</h3> 
      <h3><a href={buscadores[0]}>Google</a></h3>
      <hr></hr>
      </center>
      <center>
      <h3>segundo buscador:</h3> 
      <h3><a href={buscadores[1]}>bing</a></h3>
      <hr></hr>
      </center>
      <center>
      <h3>tercer buscador: </h3> 
      <h3><a href={buscadores[2]}>yahoo</a></h3>
      <hr></hr>
      </center>
      
      
      
    
    </div>
  );
}

export default App;