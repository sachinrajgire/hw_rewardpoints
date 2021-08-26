import './App.css';
import faker from 'faker'

let numberOfMonths= 1
let numberOfDaysInMonths= 3

const createdRecords = []
// Basic Assumptions
// there are 90 days in 3 months and we are doing one transcation a day
// Total transcation Amount -- 0 < Amount < 500

for(let i=0;i< numberOfDaysInMonths * numberOfMonths ;i++) {
  createdRecords.push({
    amount:Math.floor((Math.random() * 500) + 1),
    transcationType:"purchase",
    transcationDescription:faker.finance.transactionDescription()
  })
}

console.log(createdRecords,'createdRecords');

function App() {

function pointsEarned(amount) {
if(amount > 100){
  return (amount - 100)*2 + 50
}
if(amount <= 100 && amount >=50){
  return (amount - 50) *1
}
return 0  
}

const totalPoints =createdRecords.reduce((accu,next)=>{
  const {amount}= next
  return accu+pointsEarned(amount)
},0)  

let recs= createdRecords.map(i=>{
  const {transcationDescription,transcationType,amount}= i
return (
  <div>
{`${transcationDescription.slice(0,30)}${transcationType}  ${amount} ${pointsEarned(amount)}`}
  </div>
)
})

  return (
    <div className="App">
        
        {totalPoints}
        {recs}
      
    </div>
  );
}

export default App;
