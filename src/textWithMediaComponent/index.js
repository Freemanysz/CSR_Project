import template from './index.html'
import contentJson from './content.json'
import config from './config.js'
import './style.scss'
import image from './statics/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog-5.jpg'

export default class {
    mount(container) {
        document.title = 'text-with-media-component'
        container.innerHTML = template
        let media = document.createElement(contentJson.content.media.type)
        let media_div = document.createElement("div")
        media.setAttribute("src", image)
        media_div.setAttribute("class", 'media-block')
            media_div.append(media)
        if (config.mediaAlign == 'right') { 
            document.querySelector('.text_with_media_component').append(media_div)
        } else {
            document.querySelector('.text_with_media_component').prepend(media_div)
        }

        let textHedaing = document.querySelector('#text_with_media_heading');
        textHedaing.innerHTML = contentJson.content.hedaing

        let textContent = document.querySelector('.text_content');
        textContent.innerHTML = contentJson.content.paragraphs
    }
}