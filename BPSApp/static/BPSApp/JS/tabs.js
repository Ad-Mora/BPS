var tabBar = (function(){

    // Global Variables

    currentPageIndex = 0;

    pageIndexDict = {
        "Basic Info": 0,
        "Address": 1,
        "Contacts": 2,
        "Billing": 3,
        "Notes": 4
    };

    // collect DOM objects

    // content pages
    basicInfoPage = document.querySelector(".basic-info-page");
    addressPage = document.querySelector(".address-page");
    contactsPage = document.querySelector(".contacts-page");
    billingPage = document.querySelector(".billing-page");
    notesPage = document.querySelector(".notes-page");

    pageList = [basicInfoPage, addressPage, contactsPage, billingPage, notesPage];

    // tab bar items
    tabBar = document.querySelector(".tab-bar");
    tabItems = tabBar.querySelectorAll(".tab-item");

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

            // unselect the currently selected tab, and select the new one
            var oldTab = tabItems[currentPageIndex];
            oldTab.style.backgroundColor = "#008fb3";
            newTab.style.backgroundColor = "#007a99";

            // set the old page index to the new one
            currentPageIndex = newPageIndex;
        }
    }







})();