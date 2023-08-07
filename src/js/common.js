/* NavBar */

export const navbar = document.querySelector("nav")
export const navbar_container = navbar.querySelector(".container")
export const navbar_container_logo = navbar_container.querySelector(".logo")
export const navbar_container_searchBar = navbar_container_logo.querySelector(".search-bar")
export const navbar_container_create = navbar_container.querySelector(".create")
export const navbar_container_create_img = navbar_container.querySelector("img")

/* Main */
export const main = document.querySelector("main")
export const main_container = main.querySelector(".container")

/* Main Left */
export const left = main_container.querySelector(".main-left")
export const left_profile = left.querySelector(".profile")
export const left_profile_img = left_profile.querySelector("img")
export const left_profile_name = left_profile.querySelector("h2")
export const left_profile_at = left_profile.querySelector("p")
export const left_sidebar = left.querySelector(".sidebar")

/* Create Sidebar */
export const create_sidebar = (info = []) => {
  info.forEach(item => {
    const sidebar_item = document.createElement("a")
    const sidebar_item_span = document.createElement("span")
    const sidebar_item_h2 = document.createElement("h2")
    const sidebar_item_span_i = document.createElement("i")
    sidebar_item.classList.add("menu-item")
    item.icon_class_list.forEach((each_icon_class) => {
      sidebar_item_span_i.classList.add(each_icon_class)
    })
    sidebar_item_h2.textContent = item.name
    sidebar_item_span.append(sidebar_item_span_i)
    sidebar_item.append(sidebar_item_span)
    sidebar_item.append(sidebar_item_h2)
    left_sidebar.appendChild(sidebar_item)
  })
}

/* Create Description */
export const create_description = (info = []) => {
  
}

/* Main Middle */


/* Create News */


/* Create Profile */


/* Create Picture */


/* Create Control */


/* Create Comment */


/* Main Right */