const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increaseCount()  {
            this.count++;
        },
        decreaseCount() {
            if(this.count <= 0) {
                this.count = 0;
            } else {
                this.count--
            }
        }
    }
})

app.mount('#app')