class MobileMenu{
    constructor(){
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");
        this.siteHeader = document.querySelector(".site-header");
        this.events();        
    }

    events(){
        //use lambda expression to preserve this
        this.menuIcon.addEventListener("click",(e)=>{
            this.toggleTheMenu(e);
        })
    }

    toggleTheMenu(e){
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
        //alert("Icon clicked!");
    }
    
}

export default MobileMenu;