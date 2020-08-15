Front end for Haptic Paradigm, a realtime, interactive music generator.

Client should now be served on port 3000 and a socket listening on port 8000.

KNOWN BUGS:

-   If the frequency slider is moved but the amplitude slider is not touched for the entire duration, the amplitude slider will revert to default state for the client who just had control.

docker build -t chloealxandra/esfrontend .
docker run -p 8080:5000 -p 8002:8002 chloealxandra/esfrontend
