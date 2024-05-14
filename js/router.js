const route = (event) => {
    const evt = event || window.event;
    evt.preventDefault();
    window.history.pushState({}, '', evt.target.href);
    handlerLocation();
}

const routes = {
    // 404: "/template/404.html",
    "/": "/template/index.html",
    "/servicios": "/template/servicios.html",
    "/productos": "/template/productos.html",
    "/contacto": "/template/contacto.html",
}

const handlerLocation = async() => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('main').innerHTML = html
    
    // document.title = route.title
    // document
    //     .querySelector('meta[name="description"]')
    //     .setAttribute('main', route.description)
}

window.onpopstate = handlerLocation;
window.route = route

handlerLocation();