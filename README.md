## DRIPMaP (CEN3031 Final Project)
DRIPMaP (which stands for Disaster Relief Identification & Priority Management Platform) is a mapping Software that helps people stuck in natural disasters be aware of hazards and resources in their areas and coordinate disaster response by using crowdsourced information. DRIPMaP also helps people gain resources and information on what to do before and during a disaster.

###### Instructions to use DRIPMaP:
1) clone repo
2) run ```npm install``` to download all necessary dependencies
3) cd to ```server``` folder and run ```npm install``` to download all necessary dependencies
4) cd to ```client``` folder and run ```npm install``` to download all necessary dependencies

###### How to create server side config file:
1) cd to ```server/config/``` and open ```config.js```
2) Place a valid MongoDB uri into the uri variable line
3) For the ```token_secret``` variable, place any random string

###### How to create client side config file:
1) cd to ```client/src/config/``` and open ```config.js```
2) For the ```config.gmaps_api_key variable```, place your Google Maps API key

###### Instructions to run DRIPMaP:
0) We had to comment out a few config imports/invocations to get deployment to work. If you want to run this locally, you'll need to `grep -R "config" --exclude-dir=node_modules` from the root directory to find those locations and un-comment them. We would go back and change this, but we don't want to run afoul of late submission penalties. 
1) cd to ```server folder```
2) run ```npm run dev```
