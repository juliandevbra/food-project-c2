export const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            // Otras operaciones previas
            return {count: state.count + 1}
        case 'decrement': 
            return {count: state.count - 1}
        case 'reset': 
            return {count: 0}
        case 'random':
            return {count:  action.payload}
        case '42':
            return {count: action.payload}
    }
}