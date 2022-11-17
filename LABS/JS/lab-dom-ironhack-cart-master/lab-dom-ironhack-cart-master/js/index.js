// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

//Nos traemos elemenos del DOm
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  console.log(price. quantity);
  //... your code goes here
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  const subtotalValue = priceValue * quantityValue
  const subTotal = product.querySelector(".subtotal span");
    
  subTotal.innerText = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');

  let totalValue = 0

  //iterar en base a cada elemento o producto y dentro del body de este bucle vamos a actualizar el valor de la variable totalValue y vamos a usar la funcion updaSubtotal para poder hacer el calculo

  for (let product of products) {
    totalValue += updateSubtotalSubtotal(product)
  }
  //Darle display a el valor de este calculo iterando en el HTML , entonces apuntamos al elemento del dom que contiene ese TOTAL

  document.querySelector("#total-value span").innerText = totalValue;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.parentNode.parentNode;
  console.log(row);

  const parent = row.parentNode;
  console.log(parent);
  
  parent.removeChild(row);

  calculateAll()
}


// ITERATION 5

function createProduct() {
  const createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value
  let newProdPriceInput = createRow.querySelector("input[type='numer']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2)

  //part 2
  const newTableRow = document.createElement('tr');
  newTableRow.clasName = 'product';
  newTableRow.innerHTML = `
  <td class ="name">
    <span>${newProdNameValue}</span>
    </td>
  <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantify">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>

  `;
}
  

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});
