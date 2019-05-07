import './styles/tufte.css'
import Vue from 'vue'
import "prismjs"
import "prismjs/themes/prism.css"
import Prism from "vue-prism-component"
Vue.component("prism", Prism)

export default ({ rootOptions }) => {
    rootOptions.head = function () {
        return {
            script: [
                { type: "text/javascript", src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML", async: true }
            ]
        }
    }
}