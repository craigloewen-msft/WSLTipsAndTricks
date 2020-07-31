Vue.component('postbox', {
    template: `
    <div v-bind:class="{ expanded: expanded }" v-on:click="expanded = !expanded">
        <slot></slot>
    </div>
    `,
    data: function () {
        return {
          expanded: false
        };
    },
    methods: {
        expand: function () {
            expanded = true;
        }
    }
});
window.onload = function () {
    var app = new Vue({
        el: '#vue-app'
    });
};