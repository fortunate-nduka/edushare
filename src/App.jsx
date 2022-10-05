import { Fragment } from 'react';
import { Courses, Header, How, Partners } from './components';

function App() {
  return (
    <Fragment>
      <Header />
      <Partners />
      <How />
      <Courses />
    </Fragment>
  );
}

export default App;
