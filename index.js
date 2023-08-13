import "./index.css"
// import { profile, sidebar} from "./data/db.json"
import { cards, message, request, profile, highline, sidebar } from "@/js/database"

import {
  // NavBar
  navbar_container_logo,
  navbar_container_create_img,
  // Main Left
  left_profile_img,
  left_profile_name,
  left_profile_at,
  create_sidebar,

  // Description

  create_description,
  middle_form_img,
  middle_form_input_text,

  create_news_dom,
  create_profile_structure,
  create_picture_structure,
  create_control_structure,
  // create_comment_structure,


} from '@/js/common' //vite.config.js 里面定义 @ --> './src'

/* NAV */
navbar_container_logo.textContent = "TopSocial"
navbar_container_create_img.src = profile.img_src

/* LEFT */

left_profile_img.src = navbar_container_create_img.src
left_profile_name.textContent = profile.name
left_profile_at.textContent = profile.at

create_sidebar(sidebar)
/* MIDDLE */

/* HIGHLINE */
create_description(highline.description)

/* FORM */
middle_form_img.src = profile.img_src
middle_form_input_text.placeholder = `What's on your mind, ${profile.name}?`

/* CARD */
const cardDom = document.querySelector(".card")

cards.forEach ( element => {
  const doms = create_news_dom ()

  cardDom.appendChild(doms.info)
  create_profile_structure(doms.info_profile, element.profile)
  create_picture_structure(doms.info_picture, element.profile)
  create_control_structure(doms.info_control, element.profile)
  // create_comment_structure(doms.info_comment, element.profile)
})

/* Message */

/* Request */
