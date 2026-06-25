const productItems = [
    {
        name:"SD BB400 Legend Knight Superior Dragon",
        price:"500.000VNĐ",
        link:"../html/trang6.html",
        image:"../assets/images/gundam.jpg"
    },
    {
        name:"MG Neo Zeon MSN-04 Sazabi",
        price:"2.150.000VNĐ",
        link:"../html/trang5.html",
        image:"../assets/images/gundam3.jpg"
    },
    {
        name:"HG UC TX-FF104 Alyzeus Gundam",
        price:"2.780.000VNĐ",
        link:"../html/trang5.html",
        image:"../assets/images/gundam2.jpg"
    },
    {
        name:"HG Gustav Karl Type-00",
        price:"830.000VNĐ",
        link:"../html/trang5.html",
        image:"../assets/images/gundam4.jpg"
    },
    {
        name:"RG 43 Wing Gundam Zero",
        price:"1.050.000VNĐ",
        link:"../html/trang5.html",
        image:"../assets/images/gundam5.jpg"
    },
    {
        name:"Mô hình lắp ráp 1/100 DP-H01 Ling Yao",
        price:"1.250.000VNĐ",
        link:"../html/trang5.html",
        image:"../assets/images/gundam6.jpg"
    }
];

function createItem(obj) {
    const productList = document.getElementById("product-list");
        productList.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <div class="ratio ratio-1x1 product-image">
                    <img src="${obj.image}" alt="${obj.name}" class="card-img-top" style="object-fit: cover;">
                </div>
                <div class="card-body product-info d-flex flex-column justify-content-between">
                    <h4 class="card-title">${obj.name}</h4>
                    <h5 style="text-align: justify;" class="card-title text-danger">${obj.price}</h5>
                    <a href="${obj.link}" class="btn btn-info w-100 mt-auto"> Chi Tiết </a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProducts(objArray) {
    document.getElementById("product-list").innerHTML = ""; 
    
    let i = 0;
    while(i < objArray.length) {
        createItem(objArray[i]); 
        i++;
    }
}