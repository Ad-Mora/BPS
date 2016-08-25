var optionBar = (function(){

    // get DOM objects
    addCustomerButton = document.getElementsByClassName("add-customer-button")[0];
    cancelCustomerAddButton = document.getElementsByClassName("cancel-customer-add-button")[0];
    customerSearchWrapper = document.getElementsByClassName("search-customer-wrapper")[0];
    tabDisplay = document.getElementsByClassName("tab-display")[0];

    // bind events
    addCustomerButton.addEventListener('click', showCustomerFields);
    cancelCustomerAddButton.addEventListener('click', cancelCustomerAddition);

    // functions
    function showCustomerFields(event) {
        addCustomerButton.style.display = "none";
        customerSearchWrapper.style.display = "none";
        cancelCustomerAddButton.style.display = "inline-block";
        tabDisplay.style.display = "block";
    }

    function cancelCustomerAddition(event) {
        cancelCustomerAddButton.style.display = "none";
        tabDisplay.style.display = "none";
        addCustomerButton.style.display = "inline-block";
        customerSearchWrapper.style.display = "inline-block";
    }


})();