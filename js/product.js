document.addEventListener('DOMContentLoaded', function () {
    const addProductBtn = document.querySelector('.add-product');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function () {
            window.location.href = 'pos-system3.html?from=products.html'; 
        });
    }
});