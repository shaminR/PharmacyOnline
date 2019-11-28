import * as React from 'react';
import Main from './components/main';
import CustomNavbar from './components/navbar';

class App extends React.Component{

	render() {
        return(
            <div>
                <p>
                    <CustomNavbar />
                </p>
                <p>spacer</p>
                <Main />
            </div>
        );
    }
}

export default App;
