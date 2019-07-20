1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign
.concat
.filter
.includes()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- store is known as the 'single source of truth' because, you have all your state in your single store. it is not stored on the components themselves(if used by more than just that single component) it stored in the redux store so all components may access it.

- actions, This is the information for your store which includes a type of information, and generally a payload of data to send.
- reducers, actions are sent to the reducer and the reducer does the applications state changes according to the actions.
- store, brings everything together and holds application state via wrapping around your entire application

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- component state is solely on the component, while application state is in the redux store and can be accessed by any component by the higher component
  connect.
- if you were doing say a form that needed a 'name' and 'description' on the form but afterwards to clear them this would be good to use with component state.
- WHILE in the form sending the data back and forth you would use application state.
- because you can use component and application state at the same time.

1.  What is middleware?

- middle ware is programs that run between the flow of input and output and give extra capabilities to the program.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
