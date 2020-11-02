/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/app.js');

/* const $ = require('jquery');
const greet = require('./greet'); */

import $ from 'jquery';
import greet from './greet';

$(document).ready(() => {
    $('body').prepend('<h1>' + greet('John Doe') + '</h1>');
});

import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app',
    render: (h) => h(App),
});