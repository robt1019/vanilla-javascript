'use strict';

document.addEventListener("DOMContentLoaded", function() {

    var navBar = document.getElementById('navBar');
    var homeLink = document.getElementById('homeLink');
    var aboutLink = document.getElementById('aboutLink');
    var loginLink = document.getElementById('loginLink');
    var getCats = document.getElementById('getCatsLink');

    var viewSwitcher = document.getElementById('viewSwitcher');

    var urlSwitcher = {
        changeUrl: function(changeUrl) {
            window.location.hash = changeUrl;
        },
        getTemplateFromUrl: function(url) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        return request.responseText;
                    } else {
                        return 'problem grande';
                    }
                }
            }
            request.open("GET", "ajax_info.txt", true);
            request.send();
        }
    }

    function contains(string, stringToFind) {
        return string.indexOf(stringToFind) !== -1;
    }

    // url routing
    window.addEventListener('hashchange', function(event) {
        var newURL = event.newURL
        if (contains(newURL, '/about')) {
            viewSwitcher.innerHTML = urlSwitcher.getTemplateFromUrl('./about.html');;
            return;
        }
        if (contains(newURL, '/login')) {
            viewSwitcher.innerHTML = '<h1>Login</h1>';
            return;
        }
        if (contains(newURL, '/getCats')) {
            viewSwitcher.innerHTML = '<h1>CATs</h1>';
            return;
        }
        viewSwitcher.innerHTML = '<h1>Home</h1>'
    })

    // navbar links
    homeLink.addEventListener('click', function() {
        urlSwitcher.changeUrl('/');
    });

    aboutLink.addEventListener('click', function() {
        urlSwitcher.changeUrl('/about');
    });

    loginLink.addEventListener('click', function() {
        urlSwitcher.changeUrl('/login');
    });

    getCats.addEventListener('click', function() {
        urlSwitcher.changeUrl('/getCats')
    });
});
