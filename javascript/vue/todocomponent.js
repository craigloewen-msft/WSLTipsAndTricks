Vue.component('todo-component', {
    template: `
    <div>
        <h3>Example vue todo component</h3>
        <div v-for="item in items" class="form-group" :class="{'has-success': item.completed}">
            <div class="input-group">
                <div class="input-group-addon">
                    <input type="checkbox" v-model="item.completed">
                </div>
                <input type="text" v-model="item.title" class="form-control">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <input type="text" v-model="newItem" class="form-control">
                <div class="input-group-btn">
                    <button class="btn" :class="{'btn-primary': newItem}" @click="addItem()">add!</button>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            items: [
                {
                    id: 'item-1',
                    title: 'Checkout vue',
                    completed: false
                }, {
                    id: 'item-2',
                    title: 'Use this stuff!!',
                    completed: false
                }
            ],
            newItem: ''

        };
    },
    methods: {
        addItem: function () {
            if (this.newItem) {
                var item = {
                    id: Math.random(0, 10000),
                    title: this.newItem,
                    completed: false
                };

                this.items.push(item);
                this.newItem = '';
            }
        }
    }
});
window.onload = function () {
    var app = new Vue({
        el: '#vue-app'
    });
};