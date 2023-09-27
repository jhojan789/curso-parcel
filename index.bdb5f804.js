const e=document.getElementById("app"),t=async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=30&limit=40"),a=await t.json(),i=a?.map(e=>`
    <article>
      <img src="${e.images[0]}"/>
      <h2>
        ${e.title}
        <small>Price $ ${e.price}</small>
      </h2>

    
    </article>
    
    `).join(""),s=document.createElement("section");s.classList.add("Items"),s.innerHTML=i,e.appendChild(s)};t();//# sourceMappingURL=index.bdb5f804.js.map

//# sourceMappingURL=index.bdb5f804.js.map
