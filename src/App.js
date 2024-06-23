import './App.css';
import Form from './components/Form';
import Questions from './components/Questions';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center py-8">
      <Wrapper children={<Form />} />
    </div>
  );
}

export default App;
