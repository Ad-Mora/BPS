var tabBar = (function(){

    // Global Variables

    currentPageIndex = 0;

    pageIndexDict = {
        "Basic Info": 0,
        "Contacts/Addresses": 1,
        "Billing": 2,
        "Notes": 3
    };

    // collect DOM objects

    // content pages
    basicInfoPage = document.querySelector(".basic-info-page");
    contactsAndAddressesPage = document.querySelector(".contacts-and-addresses-page");
    billingPage = document.querySelector(".billing-page");
    notesPage = document.querySelector(".notes-page");

    pageList = [basicInfoPage, contactsAndAddressesPage, billingPage, notesPage];

    // tab bar items
    tabItems = document.querySelectorAll(".tab-item");

    // bind events
    for (var i = 0; i < tabItems.length; i++) {
        tabItems[i].addEventListener('click', showTab);
    }

    // startup events

    // start the basic info tab off already highlighted
    tabItems[0].style.backgroundColor = "#007a99";

    // functions
    function showTab(event) {
        var newTab = event.currentTarget;
        var newTabName = newTab.textContent;
        var newPageIndex = pageIndexDict[newTabName]

        if (newPageIndex != currentPageIndex) {
            // unselect the currently selected tab, and select the new one
            var oldTab = tabItems[currentPageIndex];
            oldTab.style.backgroundColor = "#008fb3";
            newTab.style.backgroundColor = "#007a99";

            // display the new page
            var newPage = pageList[newPageIndex];
            var currentPage = pageList[currentPageIndex];
            currentPage.style.display = "none";
            newPage.style.display = "block";

            // set the old page index to the new one
            currentPageIndex = newPageIndex;
        }
    }
})();
