```bash
git submodule update --init --recursive
cd core/@finde/nofy && yarn && cd ../../..
docker-compose build && docker-compose up
```