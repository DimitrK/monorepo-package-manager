# YARN Workspaces (v2.0.0-rc.29)

_Note: Make sure you have yarn v1.22.0 or v2.x installed. Run `yarn -v`. If yarn is not installed [follow the instructions here](https://classic.yarnpkg.com/en/docs/install/#mac-stable)_

1. remove any previously set up node modules

```
rm -rf .yarnrc.yml
yarn run clean
```

2. switch to Yarn v2 if you are on v1.22.0 (If the version is lower [follow this](https://yarnpkg.com/getting-started/install))

```
yarn set version berry
```

3. install dependencies by running in your console

```
yarn install
```

4. build to see if workspaces work out of the box

```
yarn build
```

**tip:** start individual workspace:

```
yarn workspace @acme/two start
```
