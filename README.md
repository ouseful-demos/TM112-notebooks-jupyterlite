# JupyterLite Demo

TM112 notebooks via JupyterLite, deployed as a static site to GitHub Pages, for demo purposes.

## Try it in your browser

➡️ **https://ouseful-demos.github.io/TM112-notebooks-jupyterlite**

## Requirements

JupyterLite is being tested against modern web browsers:

- Firefox 90+
- Chromium 89+

## Usage

This repository is meant to demo how to deploy JupyterLite to GitHub Pages, using the released prebuilt JupyterLite assets.

A Github Action will create and deploy a JupyterLite environment seeded with notebooks found in the `content/` directory.

To deploy things locally:

- clone this repo;
- place your distribution notebooks in the `content` directory;
- run `./jupyterlite-install.sh` to grab and unpack a copy of the JupyterLite distribution;
- run `./deploy.sh` to create a manifest based on the notebooks you want to distribute and copy them to the correct location;
- run `python3 -m http.server 8111 -d dist/` to launch a simple webserver serving the idstribution (in the `dist/` folder) on a specified port (in this case, port `8111`);
- view the environment and run the notebook in your browser (eg using the previous webserver launch command, at: `localhost:8111`).

### Deploy a new version

In the JupyterLite installation script (`jupyterlite-install.sh`), update the version of JupyterLite:

https://github.com/ouseful-demos/TM112-notebooks-jupyterlite/blob/ecf772cfec5a57f9d6d7f9c9d43dd8b8005931d1/jupyterlite-install.sh#L5

Add notebooks and supporting files into the `content/` directory.

Then commit and push the changes. The site will be deployed on the next push to the `main` branch.
