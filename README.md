---
home: true
heroText: Welcome to lilcandleBlog
tagline: Do not go gentle into that good night
#heroImage: /hero.png
#heroImageStyle: {
#  maxWidth: '600px',
#  width: '100%',
#  display: block,
#  margin: '9rem auto 2rem',
#  background: '#fff',
#  borderRadius: '1rem',
#}
bgImageStyle: {
  height: '450px'
}
isShowTitleInHome: true
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长

---
<style>
  .hero{
    background-image: url(.vuepress/public/bk.gif) !important;
    background-repeat: repeat !important;
    background-size: auto !important;
  }
  /*body{*/
  /*  !*background-color: black !important;*!*/
  /*  background-image: url(.vuepress/public/bk.gif) !important;*/
  /*}*/

</style>


<script>
export default {
  mounted () {
let light = document.getElementsByClassName('light');
console.log(light);
let str = '--default-color-10:rgba(255, 255, 255, 1); --default-color-9:rgba(255, 255, 255, 0.9); --default-color-8:rgba(255, 255, 255, 0.8); --default-color-7:rgba(255, 255, 255, 0.7); --default-color-6:rgba(255, 255, 255, 0.6); --default-color-5:rgba(255, 255, 255, 0.5); --default-color-4:rgba(255, 255, 255, 0.4); --default-color-3:rgba(255, 255, 255, 0.3); --default-color-2:rgba(255, 255, 255, 0.2); --default-color-1:rgba(255, 255, 255, 0.1); --background-color:#fff; --box-shadow:0 1px 8px 0 rgba(0, 0, 0, 0.1); --box-shadow-hover:0 2px 16px 0 rgba(0, 0, 0, 0.2); --text-color: #183f; --text-color-sub:#7F7F7F; --border-color:#eaecef; --code-color:rgba(27, 31, 35, 0.05); --mask-color:#888;';
    light[0].setAttribute('style',str);
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => {
      this.scrollFn();
    });
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight;
      document.documentElement.scrollTop = windowH;
    }
  }
}
</script>
