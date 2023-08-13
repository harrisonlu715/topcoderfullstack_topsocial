

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



export const createDom = (domName = 'div') => {
  return document.createElement(domName)
}

/* Create News */ 
export const create_news_dom = (info = []) => {

  const doms = {
    info: createDom(),
    info_profile: createDom(),
    info_picture: createDom(),
    info_control: createDom(),
    info_comment: createDom(),
  }

  doms.info.classList.add("info")
  doms.info_profile.classList.add("info-profile")
  doms.info_picture.classList.add("info-picture")
  doms.info_control.classList.add("info-control")
  doms.info_comment.classList.add("info-comment")

  doms.info.appendChild(doms.info_profile)
  doms.info.appendChild(doms.info_picture)
  doms.info.appendChild(doms.info_control)
  doms.info.appendChild(doms.info_comment)

  return doms
}


/* Create Profile */
export const create_profile_structure = (profile_dom, info) => {
  console.log(profile_dom, info);
  const profile_sub_dom = createDom()
  profile_sub_dom.classList.add("profile")
  profile_sub_dom.innerHTML = `
    <div class="profile-photo">
      <img alt="profile-photo">
    </div>
    <div class="profile-description">
      <h2></h2>
      <p></p>
    </div>
  `

  const profile_setting = createDom('i')
  profile_setting.className = 'uil uil-ellipsis-h'

  profile_dom.appendChild(profile_sub_dom)
  profile_dom.appendChild(profile_setting)

  profile_sub_dom.querySelector("img").src = info.src
  profile_sub_dom.querySelector("h2").textContent = info.name
  profile_sub_dom.querySelector("p").textContent = `${info.position}, ${info.time}`

  
}

/* Create Picture */
export const create_picture_structure = (picture_dom, info) => {
  const picture_sub_dom = createDom('img')
  picture_sub_dom.setAttribute('width', '100%')
  picture_sub_dom.src = info.img_src
  picture_dom.appendChild(picture_sub_dom)
  
}


/* Create Control */
export const create_control_structure = (control_dom, info) => {
  const main_control = createDom()
  const main_control_like = createDom('i')
  const main_control_comment = createDom('i')
  const main_control_share = createDom('i')

  main_control.appendChild(main_control_like)
  main_control.appendChild(main_control_comment)
  main_control.appendChild(main_control_share)

  const control_mark = createDom('i')

  control_dom.appendChild(main_control)
  control_dom.appendChild(control_mark)

  main_control_like.className = info.like
  main_control_comment.className = info.comment
  main_control_share.className = info.share
  control_mark.className = info.mark



}

/* Create Comment */
// export const create_comment_structure = (comment_dom, info) => {
//   const like_panel_dom = createDom()
//   like_panel_dom.classList.add("profile-photo-list")
//   info.img_src_list.forEach(element => {
//     log("img_src: ", element)
//     const like_people_img_dom = createDom('img')
//     like_people_img_dom.src = element
//     like_people_img_dom.classList.add("profile-photo")
//     like_panel_dom.appendChild(like_people_img_dom)
//   })

//   const like_people_text_dom = createDom('span')
  


//   comment_dom.appendChild(like_panel_dom)
// }


/* Main Right */