

// =Step 1: import
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="">
      {/* step 2: call the function */}
      <Navbar/>
      <Header title='Contacts App'/>
    </div>
  );
}

export default App;
