# Package managers
Testing how to set up and run package managers inside a monorepo and how well they work out of the box with existing code.

Each package manager resides in its own branch. The following are available:

| Package manager  | branch  |
|---|---|
|  Yarn | master  |
|  Yarn pnp | [pnp/yarn-v1](https://github.com/DimitrK/monorepo-package-manager/tree/pnp/yarn-v1) |
|  Yarn 2 pnp |  [pnp/yarn-v2](https://github.com/DimitrK/monorepo-package-manager/tree/pnp/yarn-v2) |
|  PNPM |  [pnpm](https://github.com/DimitrK/monorepo-package-manager/tree/pnpm) |


# YARN Workspaces (v1.22.0)

_Note: Make sure you have yarn v1.x installed. Run `yarn -v`. If yarn is not installed [follow the instructions here](https://classic.yarnpkg.com/en/docs/install/#mac-stable)_

1. remove any previously set up node modules
```
yarn run clean
```

2. install pnp by running in your console
```
yarn isntall
```

3. build to see if pnpm works out of the box
```
yarn build
```

**tip:** start individual app:
```
yarn workspace @acme/two start
```