System.config({
    defaultJSExtensions: true,
    map: {
        'rxjs': 'webjars/rxjs/5.0.0-beta.6',
        '@angular': '@angular',
        'app': 'js'
    },
    packages: {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        '@angular/core': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/http': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/compiler': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/router-deprecated': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        '@angular/upgrade': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        '@angular/common': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    }
})


System.import('app').then(null, console.error.bind(console));