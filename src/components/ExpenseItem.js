import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>June 20th 2021</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$295</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
