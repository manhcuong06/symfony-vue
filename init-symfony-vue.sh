#!/bin/sh

echo '**** START SETUP SYMFONY-VUE ****'
echo '========================='

cp .env.example .env
echo '**** DONE Copy env ****'

composer install
yarn install
echo '**** DONE Install dependencies ****'

yarn encore dev
echo '**** DONE Build assets ****'

echo '===================='
echo '**** SETUP SYMFONY-VUE SUCCESSFULLY ****'
