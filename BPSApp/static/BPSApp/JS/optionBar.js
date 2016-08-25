var optionBar = (function(){

    // global variables
    var searchSuggestionsDisplayed = false;

    // get DOM objects
    addCustomerButton = document.getElementsByClassName("add-customer-button")[0];
    cancelCustomerAddButton = document.getElementsByClassName("cancel-customer-add-button")[0];
    searchCustomerLabel = document.getElementsByClassName("search-customer-label")[0];
    searchCustomerFieldWrapper = document.getElementsByClassName("search-customer-field-wrapper")[0];
    searchCustomerField = searchCustomerFieldWrapper.getElementsByClassName("search-customer-field")[0];
    searchSuggestions = searchCustomerFieldWrapper.getElementsByClassName("search-suggestions")[0];
    tabDisplay = document.getElementsByClassName("tab-display")[0];

    // bind events
    addCustomerButton.addEventListener('click', showCustomerFields);
    cancelCustomerAddButton.addEventListener('click', cancelCustomerAddition);
    searchCustomerField.addEventListener('focus', toggleSearchSuggestions);
    searchCustomerField.addEventListener('blur', toggleSearchSuggestions);

    // functions
    function showCustomerFields(event) {
        addCustomerButton.style.display = "none";
        searchCustomerLabel.style.display = "none";
        searchCustomerFieldWrapper.style.display = "none";
        cancelCustomerAddButton.style.display = "inline-block";
        tabDisplay.style.display = "block";
    }

    function cancelCustomerAddition(event) {
        cancelCustomerAddButton.style.display = "none";
        tabDisplay.style.display = "none";
        addCustomerButton.style.display = "inline-block";
        searchCustomerLabel.style.display = "inline-block";
        searchCustomerFieldWrapper.style.display = "inline-block";
    }

    function toggleSearchSuggestions(event) {
        if (!searchSuggestionsDisplayed) {
            searchSuggestions.style.display = "block";
            searchSuggestionsDisplayed = true;
        } else {
            searchSuggestions.style.display = "none";
            searchSuggestionsDisplayed = false;
        }
    }


})();