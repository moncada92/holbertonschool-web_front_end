const stock = {
  macbook: 2,
  iphone: 4
}

function processPayment(itemName) {
  stock[itemName]--;
  console.log(`Payment is being processed for item ${itemName}`)
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`)
  console.log(`Payment is not being processed`)
}

function processOrder (itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`)
  itemNameLower = itemName.toLowerCase();

  if(stock[itemNameLower] > 0) {
    callbackPayment(itemNameLower);
  } else {
    callbackError(itemNameLower);
  }
}

let item = prompt("Please enter the item you would like to purchase (Macbook, iPhone)")

processOrder(item, processPayment, processError);