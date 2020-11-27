import logo from './logo.svg';
import Card from './components/Card';
import './App.css';

function App() {

  const item = {
    title: 'title',
    img_url: '123.jpg',
    url: '/123',
  }

  return (
    <div className="App">
      <Card item={item}>
      <p>text text tssssext</p>
      <p>text text text</p>
      <p>text text text</p>
      </Card>
    </div>
  );
}

export default App;
