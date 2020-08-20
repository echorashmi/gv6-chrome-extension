Chrome Extension - followed the documentation from: 
https://developer.chrome.com/extensions/getstarted

persistent = false in chrome extension is an interesting feature. Here's what it does:

If no listeners were invoked for 5 seconds, the background page automatically unloads. 

Further Reading:
1. Exact StackOverflow Question:
https://stackoverflow.com/questions/51051833/chrome-extension-persistent

2. Related Chrome Documentation:
https://developer.chrome.com/extensions/background_pages

IONIC: UI Toolkit - HTML, CSS< JS. 
REACT: JS Library for building interfaces

Documentation:

Basic HTML Element Render in React:


This renders a simple Div element. We want to extend this further to render a whole card.
```
    class HelloMessage extends React.Component {
    render(){
        return (
        <div>
            Hello World
        </div>
        );
    }
    }
```

And this here triggers the actual class call. It's also the same function used as the entry point in index.tsx 
```
ReactDOM.render(
  <HelloMessage />, 
  document.getElementById('root')
);
```

