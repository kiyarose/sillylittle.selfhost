// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'SLF - Self Hosting Docs',
    description: 'Docs for SLF Self Hosting',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'DamianSwanAAJHS2/sillylittlefiles',
      website: {
        label: 'SLF',
        href: 'https://sillylittle.tech'
      }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'sillylittle.selfhost',
      owner: 'DamianSwanAAJHS2',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
