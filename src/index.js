const $app = document.getElementById('app');

const API = 'https://api.escuelajs.co/api/v1/products?offset=30&limit=40';


const main = async ()=>{
  const response = await fetch(API);
  const products = await response.json();

  const output = products?.map(product=>{
    return `
    <article>
      <img src="${product.images[0]}"/>
      <h2>
        ${product.title}
        <small>Price $ ${product.price}</small>
      </h2>

    
    </article>
    
    `;
  }).join('');

  const section = document.createElement('section');
  section.classList.add('Items');
  section.innerHTML = output;
  $app.appendChild(section);
  

}

main();