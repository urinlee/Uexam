import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <Router>
      <Route>
        <Route path="/index" exact component={<HomePage />} />
 
      </Route>
    </Router>
  );
}

export default App;