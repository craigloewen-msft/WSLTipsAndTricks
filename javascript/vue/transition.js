Vue.component('TransitionExpand', {
    template: `
    <div>
        <div class="tip-window" v-bind:style="{ 'max-height': currentHeight }" v-on:click.passive="toggleExpand()">
            <div v-if="!expanded" class="tip-window-collapsed"></div>
            <slot/>
            <button class="btn btn-info" v-on:click.stop="toggleClose()">Close</button>
        </div>
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
            if (!this.expanded) {
                this.currentHeight = this.maxheight + 'px';
                this.expanded = true;
            }
            // this.$forceUpdate();
        },
        toggleClose: function () {
            if (this.expanded) {
                this.currentHeight = "282px";
                this.expanded = false;
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            // Magic number is from the margin-bottom style and button height
            this.maxheight = this.$el.clientHeight + 50;
            this.currentHeight = "282px";
        })
    },
});