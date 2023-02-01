import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Error from './components/Error';

function App() {
  return (
    <div className="App w-50 mx-auto">
    <h1>Authors</h1> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/authors/create" element={<Form editMode={false} />} />
          <Route path="/authors/:id/edit" element={<Form editMode={true} />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
