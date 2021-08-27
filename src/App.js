import './App.css';
import faker from 'faker' ;


const createdRecords = []
// Basic Assumptions
// there are 90 days in 3 months and we are doing one transcation a day
// Total transcation Amount -- 0 < Amount < 500

for(let i=0;i< 100 ;i++) {
console.log(Math.floor((Math.random() * 3)+1 ),'dfd');
  createdRecords.push({
    month:["Jan", "Feb" ,"March"][Math.floor((Math.random() * 3)+1 ) -1 ],
    amount:Math.floor((Math.random() * 500) + 1),
    transcationType:"purchase",
    transcationDescription:faker.finance.transactionDescription(),
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

// function pointsEarnedPerMonth (monthName) {
// return createdRecords
// .filter((i)=>i.month ===monthName)
// .reduce(j=> j.m)
// }    


const recs= createdRecords.map(i=>{
  const {transcationDescription,amount}= i
return (
   
  <tr>
    <th>{transcationDescription.slice(0,30)}</th>
    <th>${amount}</th>
    <th>{pointsEarned(amount)}</th>
  </tr>

)
})

  return (
    <div className="App">
      <h4> {`Total Points Earned in 3 months--- ${totalPoints}`}</h4>
      {/* <h4> {`Total Points Earned in Jan--- ${pointsEarnedPerMonth("Jan")}`}</h4> */}
      
       <table>
        <tr>
    <th>Description</th>
    <th>Amount</th>
    <th>Points Earned</th>
  </tr>
        {recs}
  </table>
    </div>
  );
}

export default App;
