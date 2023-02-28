const redux = require("redux")

const counterReducer = (state = { counter: 0 }, action) => {


    if (action.type === "decrement") {
        return {
            counter: state.counter - 1
        }}
    if (action.type === "increment") {
        return {
            counter: state.counter + 1
        }}

      if (action.type === "incrementby2") {
        return {
            counter: state.counter + 2
        }}

        
      if (action.type === "decrementby2") {
        return {
            counter: state.counter - 2
        }}

    

    return state;
}


const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    const lasteststore = store.getState()
    console.log(lasteststore)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: "increment" })

store.dispatch({ type: "incrementby2" })
// store.dispatch({ type: "increment" })
 store.dispatch({ type: "decrementby2" })