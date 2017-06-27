/**
 * Created by Admin on 6/24/2017.
 */
var JSF = {

    //className : function (className) { return document.getElementsByClassName(className) },

    hasClass: function (element, className) {
        var elementClasses = [];
        if (element.className) {
            elementClasses = element.className.split(' ');
        }

        return !(elementClasses.indexOf(className) === -1);
    },

    addClass: function (element, className) {
        if (!(JSF.hasClass(element, className))) {
            var elementClasses = element.className.split(' ');
            elementClasses.push(className);
            element.className = elementClasses.join(' ');
        }
    },

    removeClass: function (element, className) {
        if (JSF.hasClass(element, className)) {
            var elementClasses = element.className.split(' ');
            var index = elementClasses.indexOf(className);
            elementClasses.splice(index, 1);
            element.className = elementClasses.join(' ');
        }
    },

    toggleClass: function (element, className) {
        if (JSF.hasClass(element, className)) {
            JSF.removeClass(element, className);
        }
        else {
            JSF.addClass(element, className)
        }
    },

    getElementsByClassName: function (className) {
        var elements = document.getElementsByTagName("*");
        var found = [];
        for (var i = elements.length-1; i < 0; i--) {
            if (elements[i].hasClass(className)) {
                found.push(elements[i]);
            }
        }
        return found;
    }
};