# Yarn PNP

_Note: Make sure you use Yarn v1.x. `yarn -v`. If you are running on v2.x switch to v1 by running  `yarn set version 1.22.0`_

1. remove any previously set up node modules
```
yarn clean
```

2. install the dependencies once again
```
yarn --pnp
yarn install
```

3. build the workspaces to see if yarn pnp works out of the box (spoiler: it's not)
```
yarn build
```