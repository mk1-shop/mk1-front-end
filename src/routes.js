import NotFound from './pages/NotFound.svelte'
import About from './pages/About.svelte'
import Contact from './pages/Contact.svelte'
import Home from './pages/Home.svelte'


import ViewProduct from './pages/ViewProduct.svelte'



export default {
    // Exact path
    '/': Home,

    '/contact': Contact,

    '/about': About,

    '/product/:id': ViewProduct,

    // Using named parameters, with last being optional
    // '/hello/:first/:last?': NotFound,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    // '/wild': Wild,
    // '/wild/*': Wild,

    // Catch-all, must be last
    '*': NotFound,
}

