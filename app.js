var app = new Vue({
    el: '#page-wrapper',
    data: {
        message: 'Hello Vue!',
        target: {},
        friends: [],
        AVATARS: {
            "吴昱颖": "wuyuying",
            "王莉": "wangli",
            "李昂": "liang",
            "卢嘉杰": "lujiajie",
            "赵彬": "zhaobin",
            "王亚龙": "wangyalong",
            "申亮": "shenliang",
            "王澜": "wanglan",
            "刘安邦": "liuanbang",
            "冯小平": "fengxiaoping",
        }
    },
    methods: {
        typeName: function (type) {
            return {
                "impression": "你给我留下最深的印象",
                "yes_and": "Yes and",
                "bless": "最走心的祝福"
            }[type];
        },
        colorClass: function (index) {
            return `color${index % 4 + 1}-alt`
        },
        getAvatar: function (name) {
            let imgPath = './data/avatar/' + this.AVATARS[name] + '.jpg';
            return imgPath;
        }
    },
    mounted: function () {
        const shuffle = arr => arr.sort(() => Math.random() - 0.5);
        var urlParams = new URLSearchParams(window.location.search);
        let targetName = urlParams.get('targetName') || urlParams.get('target');
        fetch('./data/user/' + targetName + '.json')
            .then(response => {
                return response.json();
            }).then(data => {
                this.target = data.target;
                this.friends = shuffle(data.friends);
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
});