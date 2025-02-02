import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchTodos } from './store/todoSlice';
import TodoTable from './components/TodoTable';
import SplitText from "./Third-party/SplitText"


const AppContent = () => {

  

  useEffect(() => {
  
    store.dispatch(fetchTodos());     // when the page is render dispatch function call the fetchTodoa that is api data
  }, []);

  return (

    <div className="min-h-screen bg-black p-4 text-white">

       

      <h1 className="text-xl lg:text-5xl font-medium flex justify-center my-8 font-serif">
        
      <SplitText
        text="Table Data from API"
       delay={150}
       animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
       animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
       easing="easeOutCubic"
       threshold={0.2}
       rootMargin="-50px"
      />

      </h1>

      <div>
        <TodoTable />
      </div>

    </div>
  );

};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;