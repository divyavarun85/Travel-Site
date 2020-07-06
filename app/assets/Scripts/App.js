import '../styles/styles.css'
import MobileMenu from './Modules/MobileMenu'
import RevealOnScroll from './Modules/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll(".feature-item"),75)
new RevealOnScroll(document.querySelectorAll(".testimonial"),60)


let mobileMenu = new MobileMenu();

if(module.hot){
    module.hot.accept()
}


