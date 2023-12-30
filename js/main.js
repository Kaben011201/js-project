let myArray = JSON.parse(localStorage.getItem('myArray')) || [];
renderCars();

function saveCars() {
    const name = document.getElementById('carsName');
    const price = document.getElementById('carsPrice');
    const image = document.getElementById('carsImage');

    const nameValue = name.value;
    const priceValue = price.value;
    const imageValue = image.value;

    myArray.push({
        nameValue,
        priceValue,
        imageValue
    });

    name.value = '';
    price.value = '';
    image.value = '';

    renderCars();
    localStorage.setItem('myArray', JSON.stringify(myArray));
}

function renderCars() {
    let cars = document.getElementById('carsList');
    let listCars = '';

    for (let i = 0; i < myArray.length; i++) {
        const theCars = myArray[i];
        const { nameValue, priceValue, imageValue } = theCars;

        const html = `
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <img src="` + imageValue + `" alt="" class="img-fluid">
                <h3 class="mt-3" id="carName2">` + nameValue + `</h3>
                <p>$` + priceValue + `</p>
                <p>
                    <a href="#" class="btn-view btn btn-primary w-100">View Details</a>
                    <a href="#" class="btn-book mt-2 btn btn-secondary w-100">Book Now</a>
                </p>
                <button onclick="
                    myArray.splice(${i}, 1);
                    renderCars();
                    localStorage.setItem('myArray', JSON.stringify(myArray));
                " class="btn btn-danger w-100">Delete Car</button>
            </div>`;
        listCars += html;
    }
    cars.innerHTML = listCars;
}