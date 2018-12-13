conditional and lists

v-if directive  remove entire el form the dom, not just hide it. And remove all the nested elements inside it. If we need to attach another v-if we can use <template></template>
tag, to group more elements an attach v-if directive on it. tempalte tag will not render in dom, but the elements inside it will.

v-show only hide el, useing display:none css proprety.
v-for = loop into an array and replicate all the el into that array. if we want to add index we'll add paranthesis an - as a must, the second param into the paranthesis is the index.
alternative for v-for on non nested el is useing tempalte (order in paranthesis is important - value, key, index)

v-for :key importance - use it !read  more info in vue docs.