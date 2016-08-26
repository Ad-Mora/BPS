var optionBar = (function(){

    // global variables
    var searchSuggestionsDisplayed = false;

    // get DOM objects
    addCustomerButton = document.getElementsByClassName("add-customer-button")[0];
    cancelButton = document.getElementsByClassName("cancel-button")[0];
    searchCustomerLabel = document.getElementsByClassName("search-customer-label")[0];
    searchCustomerFieldWrapper = document.getElementsByClassName("search-customer-field-wrapper")[0];
    searchCustomerField = searchCustomerFieldWrapper.getElementsByClassName("search-customer-field")[0];
    searchSuggestions = searchCustomerFieldWrapper.getElementsByClassName("search-suggestions")[0];
    searchSuggestionItems = searchCustomerFieldWrapper.getElementsByClassName("search-suggestion-item");
    currentRecordSearchNameLabel = document.getElementsByClassName("current-record-search-name-label")[0];
    currentRecordSearchName = document.getElementsByClassName("current-record-search-name")[0];
    tabDisplay = document.getElementsByClassName("tab-display")[0];

    // bind events
    addCustomerButton.addEventListener('click', showCustomerFields);
    cancelButton.addEventListener('click', resetToOptionMenu);
    searchCustomerField.addEventListener('focus', toggleSearchSuggestions);
    searchCustomerField.addEventListener('blur', toggleSearchSuggestions);

    for (var i = 0; i < searchSuggestionItems.length; i++) {
        searchSuggestionItems[i].addEventListener('mousedown', searchCustomer);
    }

    // functions
    function showCustomerFields(event) {
        addCustomerButton.style.display = "none";
        searchCustomerLabel.style.display = "none";
        searchCustomerFieldWrapper.style.display = "none";
        cancelButton.style.display = "inline-block";
        tabDisplay.style.display = "block";
    }

    function resetToOptionMenu(event) {
        cancelButton.style.display = "none";
        currentRecordSearchNameLabel.style.display = "none";
        currentRecordSearchName.style.display = "none";
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

    function searchCustomer(event) {
        var searchItem = event.currentTarget;
        var name = searchItem.textContent;

        addCustomerButton.style.display = "none";
        searchCustomerLabel.style.display = "none";
        searchCustomerFieldWrapper.style.display = "none";
        currentRecordSearchNameLabel.style.display = "inline-block";
        currentRecordSearchName.style.display = "inline-block";
        cancelButton.style.display = "inline-block";
        currentRecordSearchName.textContent = name;
        tabDisplay.style.display = "block";
    }


})();