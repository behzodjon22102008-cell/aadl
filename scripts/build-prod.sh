#!/bin/bash
# sudo chown -R ${USER} .

# sudo docker volume create green_tech_db && sudo docker volume create green_tech_images && sudo docker volume create letsencrypt_data
docker-compose --env-file .env -f  app/docker-compose/docker-compose.yaml up -d --build
docker-compose --env-file .env -f  app/docker-compose/docker-compose.yaml restart database
rm -R app