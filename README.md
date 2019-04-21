# Clare Placeholder [![Netlify Status](https://api.netlify.com/api/v1/badges/0bda769f-9274-4b82-b077-8173474b7585/deploy-status)](https://app.netlify.com/sites/clare-placeholder/deploys)

A super simple spalsh-page/placeholder for Clare's folio site. View it [here](https://clare-placeholder.netlify.com/). [Parcel](https://parceljs.org/) is used to bundle/build.

The site uses a script to switch themes on click (via CSS variables), and makes use of `scroll-snap` and CSS animations. I've tried to keep it as lightweight as possible, and avoid importing any third party libraries.

## Development

Clone this repo then install dependncies with `npm install`.

To start a dev server run `npm run dev`, for a production build run `npm run build`.

## Deployment

The site is hosted on netlify, and will auto-deploy every time a new commit is pushed to `master`. Pull requests will also generate preview deploys automatically.
