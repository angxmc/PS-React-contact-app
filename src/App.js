
// =Step 1: import
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main'

function App() {
  return (
    <div className="">
      {/* step 2: call the function */}
      <Navbar/>
      <Header title='Contacts App'/>
      <Main/>
    </div>
  );
}

export default App;
