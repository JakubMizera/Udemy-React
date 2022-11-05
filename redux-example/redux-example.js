import { configureStore, combineReducers } from 'redux';
console.clear();

// people dropping off a form (Action Creators)

const createPolicy = (name, amount) => {
  return { //Action (form)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    },
  }
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
};

// Reducers (Departments)
// reducers are functions and always get 2 arguments
//1st argument is existing data
//oldListOfClaims = [] sets value to empty array instead of undefiend
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    //we care about this action
    //adding payload from action to already existing list of claims 
    return [...oldListOfClaims, action.payload];
  }
  //we don't care about this action
  return oldListOfClaims;
};

//setting default value of bagOfMoney to 100
const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  } else return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  } else return listOfPolicies;
};

const { configureStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies,
});

const store = configureStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());