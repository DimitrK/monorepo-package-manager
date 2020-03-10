# PNPM (4.10.0)

_Note: Make sure you have pnpm installed. Run `pnpm -v`. If pnpm is not install it by running `npm add -g pnpm`_

1. remove any previously set up node modules
```
pnpm recursive run clean
```

2. install pnp by running in your console
```
pnpm recursive isntall
```

3. build to see if pnpm works out of the box
```
pnpm recursive run build
```

**tip**: run individual script
```
pnpm recursive run build:analyze --filter @acme/one
```
