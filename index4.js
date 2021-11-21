const redux=require('redux')
const reduxLogger=require('redux-logger')


const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

function buyCake(){
	return {
		type:BUY_CAKE,
		info:'First redux action'
	}
}

function buyIcecream(){
	return {
		type:BUY_ICECREAM,
		info:'Icecream redux action'
	}
}



const initialCakeState = {
	numOfCakes:10
}

const initialIcecreamState = {
	numOfIcecream:20
}


const cakeReducer = (state=initialCakeState, action) => {
	switch(action.type){
		case BUY_CAKE: return{
			...state,
			numOfCakes: state.numOfCakes - 1
		}
		default: return state
	}
}

const icecreamReducer = (state=initialIcecreamState, action) => {
	switch(action.type){
		case BUY_ICECREAM: return{
			...state,
			numOfIcecream: state.numOfIcecream - 1
		}
		default: return state
	}
}



const rootReducer=redux.combineReducers({
	cake:cakeReducer,
	icecream:icecreamReducer
})

const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()

const store=redux.createStore(rootReducer,applyMiddleware(logger))
console.log('Initial State ',store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()
