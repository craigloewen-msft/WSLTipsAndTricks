Vue.component('postresults', {
    template: `
    <div>
        <center>
        <input class="form-control" type="text" id="search_box" v-model="searchText">
        </center>
    <ul> 
            <li v-for="(someItem, name) in displayData">
                <a class="btn btn-default" v-on:click="toggleClick(name)">{{ someItem.title }}</a>
                <transition-expand>
                    <div v-bind:class="{ 'is-collapsed': someItem.collapsed }">
                        <div>
                        <slot :name="name"></slot>
                        </div>
                    </div>
                </transition-expand>

            </li>
    </ul>
    </div>
    
    `,
    data: function () {
        return {
            searchText: "",
            searchData: {},
            displayData: {},
            lunrSearch: null,
            shown: true
        };
    },
    methods: {
        searchInput: function () {
            var results = this.lunrSearch.search(this.searchText);
            console.log(results);
        },
        addSearchData: function (value) {
            this.searchData.push(value);
            console.log("Adding data!");
        },
        startSearch: function () {

            console.log("Doing search");
            let results = this.lunrSearch.search(this.searchText);

            let thisComponent = this;

            this.displayData = {};

            // Iterate over the results
            results.forEach(function (result) {
                var item = thisComponent.searchData[result.ref];

                // Add the snippet to the collection of results.
                Vue.set(thisComponent.displayData, result.ref, $.extend({ "collapsed": true }, item));
            });
        },
        toggleClick: function (inputName) {
            console.log("Clicked!", inputName);
            // this.displayData[inputName].collapsed = !this.displayData[inputName.collapsed];
            // this.$set(this.displayData[inputName], "collapsed", false);
            // Vue.set(this.displayData[inputName],"collapsed",false);
            let newValue = !this.displayData[inputName].collapsed;
            this.displayData[inputName].collapsed = newValue;
            this.shown = !this.shown;
        }
    },
    watch: {
        'searchText': function (val, preVal) {
            this.startSearch();
        }
    },
    created: function () {
        // Get code for 
        let getAllSearchData = $.getJSON('/search_data.json');

        let thisComponent = this;

        getAllSearchData.then(function (loaded_data) {

            let storedData = [];

            $.each(loaded_data, function (index, value) {
                storedData.push(
                    $.extend({ "id": index }, value)
                );
                thisComponent.searchData[index] = value;
            });

            thisComponent.lunrSearch = lunr(function () {
                this.field('id');
                this.field('title');
                // this.field('content', { boost: 10 });
                this.field('content');
                this.field('categories');

                let thisLunr = this;

                $.each(storedData, function (index, value) {
                    thisLunr.add(
                        $.extend({ "id": index }, value)
                    );
                });
            });

            thisComponent.startSearch();
        });


    }
});
