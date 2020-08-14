Front end for Haptic Paradigm, a realtime, interactive music generator.

To use this client locally, you need to have the Haptic Paradigm server running as well. https://github.com/chloealxandra/esbackend

set up instructions

`$ git clone https://github.com/chloealxandra/everyseeker.git`

`$ npm run start`

Client should now be served on port 3000 and a socket listening on port 8000.

KNOWN BUGS:

-   If the frequency slider is moved but the amplitude slider is not touched for the entire duration, the amplitude slider will revert to default state for the client who just had control.

docker run -p 3000:3000/tcp chloealxandra/esfrontend