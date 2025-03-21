const navbarData = [
    {
        "label": "Home",
        "title": "Home",
        "link": "index.html",
        "is_nested": false
    },
    {
        "id": "services",
        "label": "Services",
        "title": "Services",
        "link": "javascript:void(0)",
        "id": "Services",
        "is_nested": true,
        "root_node": false,
        "subMenu": [
            {
                "label": "Wedding Service",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Wedding Service",
                "link": "wedding_service.html"
            },
            {
                "label": "Pre Wedding Service",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Pre Wedding Service",
                "link": "pre_wedding_service.html"
            },
            {
                "label": "Maternity Photography",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Maternity Photography",
                "link": "maternity_photography.html"
            }, {
                "label": "New Born Photoshoot",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "New Born Photoshoot",
                "link": "new_born_photoshoot.html"
            }
            , {
                "label": "Interior Photography",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Interior Photography",
                "link": "interior_photography.html"
            }, {
                "label": "Custom Photography",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Custom Photography",
                "link": "custom_photography.html"
            }
        ]
    },
    {
        "id": "gallery",
        "label": "Gallery",
        "title": "Gallery",
        "link": "javascript:void(0)",
        "is_nested": true,
        "root_node": false,
        "subMenu": [
            {
                "label": "Wedding Service",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Wedding Service",
                "link": "wedding_service_gallery.html"
            },
            {
                "label": "Pre Wedding Service",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Pre Wedding Service",
                "link": "pre_wedding_service_gallery.html"
            },
            {
                "label": "Maternity Photography",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Maternity Photography",
                "link": "maternity_photography_gallery.html"
            }, {
                "label": "New Born Photoshoot",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "New Born Photoshoot",
                "link": "new_born_photoshoot_gallery.html"
            }
            , {
                "label": "Interior Photography",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Interior Photography",
                "link": "interior_photography_gallery.html"
            }, {
                "label": "Custom Photography",
                "icon": '<i class="fa-solid fa-code"></i>',
                "title": "Custom Photography",
                "link": "custom_photography_gallery.html"
            }
        ]
    },
    {
        "label": "Packages",
        "title": "Packages",
        "link": "packages.html",
        "is_nested": false
    },
    {
        "label": "About Us",
        "title": "About Us",
        "link": "about_us.html",
        "is_nested": false
    },
    {
        "label": "Contact Us",
        "title": "Contact Us",
        "link": "contact_us.html",
        "is_nested": false
    },

]

/* Counter Start*/

document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(el, target) {
        let count = 0;
        let speed = target / 100; // Adjust speed based on value

        let updateCounter = setInterval(() => {
            count += Math.ceil(speed);
            if (count >= target) {
                count = target;
                clearInterval(updateCounter);
            }
            el.textContent = count + " +"; // Append `+` sign
        }, 30); // Adjust interval time for smooth animation
    }

    // Select all counter elements and animate them
    document.querySelectorAll(".achieve-revealer .value").forEach(counter => {
        let target = parseInt(counter.textContent);
        animateCounter(counter, target);
    });
});


/* Counter End*/

const navbarList = document.getElementById("headerNavbarItems");
navbarData.forEach(item => {
    if (item.is_nested) {
        let dropdown = document.createElement("li");
        dropdown.className = "nav-item dropdown";
        dropdown.innerHTML = `
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">${item.label}</a>
                        <ul class="dropdown-menu">
                            ${item.subMenu.map(sub => `<li><a class="dropdown-item" href="${sub.link}">${sub.label}</a></li>`).join("")}
                        </ul>
                    `;
        navbarList.appendChild(dropdown);
    } else {
        let listItem = document.createElement("li");
        listItem.className = "nav-item";
        listItem.innerHTML = `<a class="nav-link" href="${item.link}">${item.label}</a>`;
        navbarList.appendChild(listItem);
    }
});


function generateSidebar(navbarData) {
    let navHTML = '';

    navbarData.forEach(item => {
        if (!item.is_nested) {
            navHTML += `<li class="nav-item"><a class="nav-link" href="${item.link}">${item.label}</a></li>`;
        } else {
            const collapseId = item.id + "Collapse";
            navHTML += `
                <li class="nav-item">
                    <a class="nav-link d-flex justify-content-between align-items-center" href="#" 
                       data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false">
                        ${item.label}
                        <span class="toggle-icon">+</span>
                    </a>
                    <ul class="collapse list-unstyled ms-3" id="${collapseId}">
            `;

            item.subMenu.forEach(sub => {
                navHTML += `<li><a class="nav-link" href="${sub.link}">${sub.label}</a></li>`;
            });

            navHTML += `</ul></li>`;
        }
    });

    return navHTML;
}

document.getElementById('sidebarList').innerHTML = generateSidebar(navbarData);
