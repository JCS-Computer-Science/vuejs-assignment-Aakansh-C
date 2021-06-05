var VM = new Vue ({
    el: '#app',
    data: {
        showImg: true,

        low:'Lowry_Transparent.png',
        fred:'Fred_Transparent 3.png',
        response: [],
        data: [],

    },
    computed: {

    },
    methods: {
        popImage: function(p) {
            if(p == 1) {
                this.low= 'Lowry_Transparent2.png'
            } else {
                if(p == 2) {
                    this.fred= 'Fred_Transparent 4.png'
                }
            }
        },
        unpopImage: function(p) {
            if(p == 1) {
                this.low= 'Lowry_Transparent.png'
            } else {
                if(p == 2) {
                    this.fred= "Fred_Transparent 3.png"
                }
            }
        },
        page2: async function(id) {
            response = await fetch(`https://www.balldontlie.io/api/v1/season_averages?per_page=100&seasons[]=2019&player_ids[]=${id}`)
            data = await response.json();
            console.log(data); 
            VM.data = data.data[0];
        },
    }
})