---
home: true
heroText: Welcome to lilcandleBlog
tagline: 不要温和地走进那个良夜
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

---
<style>
  .hero{
    background-image: url(.vuepress/public/bk.gif) !important;
    background-repeat: repeat !important;
    background-size: auto !important;
  }
</style>


<script>
export default {
  mounted () {
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
