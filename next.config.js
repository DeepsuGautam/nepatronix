/** @type {import('next').NextConfig} */
const config = {
    experimental:  {
        serverActions: {
          bodySizeLimit: '30mb',
        },
    },
  }
   
  module.exports = config