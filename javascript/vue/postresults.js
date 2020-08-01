Vue.component('postresults', {
    template: `
    <div>

    <h1>Slot content:</h1>
    <slot name="garbage">
    </slot>
    <slot v-bind="{is: 'true!'}" name="header">
    </slot>

        <form action="get" id="site_search">
        <center>
        <input style="font-size:20px;" type="text" id="search_box" v-model="searchText">
        </center>
    </form>
    <br />&nbsp;
    <h1>Post results:</h1>
    <ul> 
        <li v-for="someItem in displayData">
            <p>Title: {{ someItem.title }} , content: {{ someItem.content }} , categories: {{ someItem.categories }}</p>
        </li>
    </ul>

    <p>{{ displayData }}</p>
    <p>{{ searchData }}</p>

    </div>
    
    `,
    data: function () {
        return {
          searchText: "",
          searchData: {},
          displayData: [],
          lunrSearch: null,
          user: "joe"
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
            let results = this.lunrSearch.search(this.searchText);

            let thisComponent = this;

            this.displayData = [];
            
            // Iterate over the results
            results.forEach(function (result) {
                var item = thisComponent.searchData[result.ref];

                // Add the snippet to the collection of results.
                thisComponent.displayData.push(item);
            });

        }
    },
    watch: {
        'searchText': function(val, preVal) {
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
                thisComponent.searchData[index]= value;
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
window.onload = function () {
    var app = new Vue({
        el: '#vue-app',
        data: {
            someslotname: "garbage",
            val2: "garbage2"
        }
    });
};