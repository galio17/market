function listSections() {
    sections.forEach(section => {
        const newSection = createSection(section);
        container.appendChild(newSection);
    });
}

function listProducts(category, target) {
    category.forEach(product => {
        const newProduct = createCardProduct(product);
        target.appendChild(newProduct);
    });
}

function createSection(section) {
    const productsSection = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const productsContent = document.createElement('main');
    const productsList = document.createElement('ul');

    const categoryProducts = products.filter(product => product.category === section.category);

    productsSection.classList.add('products-section');
    productsSection.classList.add('products-content', section.class);

    sectionTitle.innerText = section.category;

    listProducts(categoryProducts, productsList);

    productsContent.appendChild(productsList);
    productsSection.appendChild(sectionTitle);
    productsSection.appendChild(productsContent);

    return productsSection;
}

function createCardProduct(product) {
    const productCard = document.createElement('li');
    const productImg = document.createElement('img');
    const productMain = document.createElement('main');
    const productTitle = document.createElement('h1');
    const productCategory = document.createElement('h5');
    const productPrice = document.createElement('strong');

    productCard.classList.add('product');
    productImg.classList.add('product-img');
    productMain.classList.add('product-main');
    productTitle.classList.add('product-title');
    productCategory.classList.add('product-category');
    productPrice.classList.add('product-price');

    productImg.src = (product.image) ? product.image : './img/products/no-img.svg';
    productImg.alt = product.imageDescription;
    productImg.title = product.title;

    productTitle.innerText = product.title;
    productCategory.innerText = product.category;
    productPrice.innerText = product.price;

    productMain.appendChild(productTitle);
    productMain.appendChild(productCategory);
    productMain.appendChild(productPrice);
    productCard.appendChild(productImg);
    productCard.appendChild(productMain);

    return productCard;
}

const container = document.querySelector('.container');
listSections();