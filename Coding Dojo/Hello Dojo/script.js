const greetings = React.createElement('h1', null, 'Hello Dojo!')
const taskTitle = React.createElement('h2', null, 'Things I need to do:')

const elementOne = React.createElement('p', null, 'Learn React')
const elementTwo = React.createElement('p', null, 'Climb Mt. Everest')
const elementThree = React.createElement('p', null, 'Run a marathon')
const elementFour = React.createElement('p', null, 'Feed the dogs')


ReactDOM.render(
    greetings,
    document.getElementById('greetings')
);
ReactDOM.render(
    taskTitle,
    document.getElementById('title')
);

ReactDOM.render(
    elementOne,
    document.getElementById('one')
);

ReactDOM.render(
    elementTwo,
    document.getElementById('two')
);

ReactDOM.render(
    elementThree,
    document.getElementById('three')
);

ReactDOM.render(
    elementFour,
    document.getElementById('four')
);


  