export default defineAppConfig({
  alpine: {
    title: '5st7 IN THE SHELL',
    description: 'たけるのブログです',
    image: {
      src: '/ghost7.webp',
      alt: 'たけるのブログです',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/shell-logos_black.webp', // path of the logo
        pathDark: '/shell-logos_white.webp', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'GHOST IN THE SHELL' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '5st7',
      instagram: 'take75st',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: '5st7'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})