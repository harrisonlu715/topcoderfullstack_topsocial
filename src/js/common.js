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

/* Main Middle */

export const middle = main_container.querySelector(".main-middle")
export const middle_highline = middle.querySelector(".highline")

/* Create Description */
export const create_description = (info = []) => {
  info.forEach((item) => {
    const id = item.id
    const title = item.title
    const background = item.background
    const img_src = item.img_src
    const descriptionDom = document.createElement("div")
    descriptionDom.classList.add("description")
    descriptionDom.innerHTML = `<div class="profile-photo">
        <img alt="profile photo">
      </div>
      <p></p>
      `
    middle_highline.appendChild(descriptionDom)
    descriptionDom.style.backgroundImage = `url(${background})`
    descriptionDom.querySelector("img").src = img_src
    descriptionDom.querySelector("p").textContent = title
  })
}

export const middle_form = middle.querySelector("form")
export const middle_form_img = middle_form.querySelector("img")
export const middle_form_input_text = middle_form.querySelector("#create-post")





/* Create News */


/* Create Profile */


/* Create Picture */


/* Create Control */


/* Create Comment */


/* Main Right */