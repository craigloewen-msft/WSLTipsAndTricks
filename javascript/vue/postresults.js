Vue.component('postresults', {
    template: `
    <div>

    <slot :name="garbCollection"></slot>

        <form action="get" id="site_search">
        <center>
        <input style="font-size:20px;" type="text" id="search_box" v-model="searchText">
        </center>
    </form>
    <br />&nbsp;
    <ul> 
        <li v-for="(someItem, name) in displayData">
            <slot :name="name"></slot>
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
          garbCollection: "garb1"
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

            this.displayData = {};
            
            // Iterate over the results
            results.forEach(function (result) {
                var item = thisComponent.searchData[result.ref];

                // Add the snippet to the collection of results.
                thisComponent.displayData[result.ref] = item;
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
