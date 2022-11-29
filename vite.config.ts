import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";


export default defineConfig({
  base: "/work-notes/",
  plugins: [
    VitePWA({
      registerType: 'prompt',
      manifest: {
        short_name: "NoteWork",
        name: "Note Work",
        icons: [
          {
            src: "favicon.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "logo128.png",
            type: "image/png",
            sizes: "128x128"
          },
          {
            src: "logo192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "logo256.png",
            type: "image/png",
            sizes: "256x256"
          },
          {
            src: "logo512.png",
            type: "image/png",
            sizes: "512x512"
          }
        ],
        start_url: ".",
        display: "standalone",
        theme_color: "#282a36",
        background_color: "#282a36"
      }
    }),
      react()
  ]
})
