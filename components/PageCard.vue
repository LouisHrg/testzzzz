<template>
  <NuxtLink
    class="relative text-2xl text-center rounded-lg hover:shadow-2xl py-4 px-2 overflow-hidden"
    :class="cardStyle.bg"
    :to="`kits/${link.id}`"
    style="height:150px"
  >
    <component :is="cardStyle.svg" class="w-80 h-80 absolute fill-white -top-20 left-0" :style="cardStyle.svgCss" />
    <p class="font-title text-white relative mt-10" style="z-index:999">{{ link.title }}</p>
  </NuxtLink>
</template>

<script>
  export default {
    props: ['link'],
    computed: {
      cardStyle() {
        const key = this.$vnode.key.toString().slice(-1);
        switch(parseInt(key)) {
          case 0:
            return { bg: 'bg-darkBlue', svgCss: "fill:#4271c7;z-index:20",svg: "SvgNut"};
          case 1:
            return { bg: 'bg-purple', svgCss: "fill:#b16fb0;z-index:20", svg: "SvgFlora"};
          case 2:
            return { bg: 'bg-lightBlue', svgCss: "fill:#8ae0ff;z-index:20", svg: "SvgCraw"};
          case 3:
            return { bg: 'bg-angry', svgCss: "fill:#ff33b8;z-index:20", svg: "SvgCoral"};
          case 4:
            return { bg: 'bg-pink', svgCss: "fill:#f5a3cc;z-index:20", svg: "SvgDove"};
          case 5:
            return { bg: 'bg-brightPink', svgCss: "fill:#e67baf;z-index:20", svg: "SvgMushroom"};
          case 6:
            return { bg: 'bg-lightGreen', svgCss: "fill:#d3e887;z-index:20", svg: "SvgFrog"};
          case 7:
            return { bg: 'bg-warmYellow', svgCss: "fill:#fed15b;z-index:20", svg: "SvgPoussin"};
          case 8:
            return { bg:'bg-green', svgCss: "fill:#17be3e;z-index:20", svg: "SvgToad"};
          case 9:
            return { bg: 'bg-red', svgCss: "fill:#f26516;z-index:20", svg: "SvgOrchid"};
          default:
            return { bg: 'bg-darkBlue', svgCss: 'fill:#4271c7;z-index:20', svg : 'SvgBird2'};
        };
      },
    },
  }
</script>

