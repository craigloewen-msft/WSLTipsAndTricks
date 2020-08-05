Vue.component('TransitionExpand', {
    template: `
    <div class="tip-window" v-bind:style="{ 'max-height': currentHeight }">
        <a class="btn btn-default" v-on:click="toggleExpand()">Expand and close</a>
        <slot/>
    </div>
    `,
    data: function () {
        return {
            expanded: false,
            maxheight: "",
            element: null,
            currentHeight: "9000px"
        };
    },
    methods: {
        toggleExpand: function () {
            console.log("Clicked!",this.expanded);
            if (this.expanded) {
                this.currentHeight = "282px";
                this.expanded = false;
            } else {
                console.log("Setting max height: ",this.maxheight)
                this.currentHeight = this.maxheight + 'px';
                this.expanded = true;
            }
            console.log("New height: ",this.currentHeight);
            this.$forceUpdate();
        }
    },
    mounted () {
        this.$nextTick(() => {
          console.log("Initial mount max height: ",this.$el.clientHeight)
          this.maxheight = this.$el.clientHeight;
          this.currentHeight = this.maxheight;
        })
    },
});